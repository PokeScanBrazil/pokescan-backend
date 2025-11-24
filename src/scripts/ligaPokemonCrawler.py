import sys
import json
import time
from bs4 import BeautifulSoup
from urllib.parse import quote_plus
from selenium import webdriver
from selenium.webdriver.chrome.options import Options 
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains

DRIVER_PATH = "/usr/local/bin/chromedriver" 

def aquirePokemonCardInfo(cardName, firstNumberCollection, secondNumberCollection):

    formattedName = quote_plus(cardName)
    formattedFirstNumber = str(firstNumberCollection).zfill(3)
    formattedSecondNumber = str(secondNumberCollection).zfill(3)
    url = f"https://www.ligapokemon.com.br/?view=cards%2Fcard&tipo=1&card={formattedName}+%28{formattedFirstNumber}%2F{formattedSecondNumber}%29"
    
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--window-size=1920,1080") 

    driver = webdriver.Chrome(
        service=ChromeService(executable_path=DRIVER_PATH), 
        options=chrome_options
    ) 
    
    driver.get(url)
    time.sleep(0.5)
    
    select = driver.find_element(By.CLASS_NAME, "select-card-edition")
    ActionChains(driver).click(select).perform()
    time.sleep(0.5)
    
    soup = BeautifulSoup(driver.page_source, "html.parser")

    # 🔹 1. Card Image
    img_tag = soup.find("img", {"id": "featuredImage"})
    cardImage = img_tag["src"] if img_tag else None
    if cardImage and cardImage.startswith("//"):
        cardImage = "https:" + cardImage 
    
    # 🔹 2. Edition Name, year and abbreviation
    edition_div = soup.find("div", {"class": "name-edition"})
    nameEdition = None
    yearEdition = None
    abbrevEdition = None

    if edition_div:
        nameEdition = edition_div.get_text(" ", strip=True)
        yearSpan = edition_div.find("span", {"class": "year-edition"})
        yearEdition = yearSpan.get_text(strip=True).strip("()") if yearSpan else None
        abbrevSpan = edition_div.find("span", {"class": "sigla-edition"})
        abbrevEdition = abbrevSpan.get_text(strip=True) if abbrevSpan else None

    # 🔹 3. rarity
    rarityTag = soup.find("span", {"id": "details-screen-rarity"})
    rarity = rarityTag.get_text(strip=True).split("(")[0].strip() if rarityTag else None
    
    # 🔹 4. Type of Card
    typeCard = None
    for div in soup.find_all("div", {"class": "container-details"}):
        title_span = div.find("span", {"class": "title"})
        if title_span and title_span.text.strip() == "Tipo":
            span_list = div.find_all("span")
            if len(span_list) > 1:
                typeCard = span_list[1].get_text(strip=True)
            break

    driver.quit()

    return {
        "name": cardName,
        "collection_1": formattedFirstNumber,
        "collection_2": formattedSecondNumber,
        "image": cardImage,
        "edition_name": nameEdition,
        "year_edition": yearEdition,
        "abbrev_edition": abbrevEdition,
        "rarity": rarity,
        "card_type": typeCard
    }

if __name__ == "__main__":
    try:
        if len(sys.argv) < 4:
            raise IndexError("Insuficient args. Use: python script.py <name> <collection_1> <collection_2>")
            
        name = sys.argv[1]
        collection_1 = sys.argv[2]
        collection_2 = sys.argv[3]
        result = aquirePokemonCardInfo(name, collection_1, collection_2)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"error": str(e), "status": "failed"}))
        sys.exit(1)