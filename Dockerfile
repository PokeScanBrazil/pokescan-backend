# 1. IMAGEM BASE: Node.js (Versão 20 recomendada)
FROM node:20-slim

# 2. INSTALAÇÃO DO PYTHON E FERRAMENTAS BÁSICAS
# Instala pacotes necessários para o Python e para baixar o Chrome (curl, gnupg, unzip)
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    curl \
    gnupg \
    unzip \
    jq \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# Configura 'python' como um alias para 'python3'
RUN update-alternatives --install /usr/bin/python python /usr/bin/python3 1

# 3. INSTALAÇÃO DO GOOGLE CHROME E CHROME DRIVER (para Selenium)

# Adiciona a chave GPG do Google Chrome ao keyring de forma segura.
RUN curl -fsSL https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /etc/apt/keyrings/google-chrome.gpg

# Adiciona o repositório do Google Chrome usando o caminho da chave.
RUN echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/google-chrome.gpg] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list

# Atualiza a lista de pacotes (com a chave válida) e instala o Google Chrome.
RUN apt-get update && apt-get install -y google-chrome-stable

# 🚀 NOVO MÉTODO: Baixa e instala o ChromeDriver no /usr/bin.
# Ele baixa a versão estável compatível com o Chrome mais recente.
RUN apt-get update && apt-get install -y chromium-driver \
    || apt-get update && apt-get install -y chromedriver \
    || ( \
    CHROME_VERSION=$(google-chrome-stable --version | cut -d ' ' -f 3 | cut -d '.' -f 1); \
    CHROME_DRIVER_VERSION=$(curl -s "https://googlechromelabs.github.io/chrome-for-testing/known-good-versions-with-downloads.json" | \
    jq -r --arg V "${CHROME_VERSION}" '.versions[] | select(.version | startswith($V + ".")) | .downloads.chromedriver[] | select(.platform == "linux64") | .url' | tail -1) && \
    curl -sSL ${CHROME_DRIVER_VERSION} -o /tmp/chromedriver.zip && \
    unzip /tmp/chromedriver.zip -d /usr/local/bin && \
    mv /usr/local/bin/chromedriver-linux64/chromedriver /usr/local/bin/chromedriver && \
    rm -rf /tmp/chromedriver.zip /usr/local/bin/chromedriver-linux64 \
    )

# 4. CONFIGURAÇÃO DO WORKDIR E DEPENDÊNCIAS
WORKDIR /app

# Dependências Node.js
COPY package*.json ./
RUN npm install

# Dependências Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt --break-system-packages

# Copia o restante do código
COPY . .

# Comando do Prisma (mantido da sua versão Node.js)
RUN npx prisma generate

# 5. EXECUÇÃO
EXPOSE 3000
CMD ["npm", "run", "dev"]