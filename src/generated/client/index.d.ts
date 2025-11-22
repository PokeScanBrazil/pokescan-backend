
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Edition
 * 
 */
export type Edition = $Result.DefaultSelection<Prisma.$EditionPayload>
/**
 * Model Card
 * 
 */
export type Card = $Result.DefaultSelection<Prisma.$CardPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Editions
 * const editions = await prisma.edition.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Editions
   * const editions = await prisma.edition.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.edition`: Exposes CRUD operations for the **Edition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Editions
    * const editions = await prisma.edition.findMany()
    * ```
    */
  get edition(): Prisma.EditionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.card`: Exposes CRUD operations for the **Card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.card.findMany()
    * ```
    */
  get card(): Prisma.CardDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.0
   * Query Engine version: 0c19ccc313cf9911a90d99d2ac2eb0280c76c513
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Edition: 'Edition',
    Card: 'Card'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "edition" | "card"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Edition: {
        payload: Prisma.$EditionPayload<ExtArgs>
        fields: Prisma.EditionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EditionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EditionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionPayload>
          }
          findFirst: {
            args: Prisma.EditionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EditionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionPayload>
          }
          findMany: {
            args: Prisma.EditionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionPayload>[]
          }
          create: {
            args: Prisma.EditionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionPayload>
          }
          createMany: {
            args: Prisma.EditionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EditionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionPayload>[]
          }
          delete: {
            args: Prisma.EditionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionPayload>
          }
          update: {
            args: Prisma.EditionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionPayload>
          }
          deleteMany: {
            args: Prisma.EditionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EditionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EditionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionPayload>[]
          }
          upsert: {
            args: Prisma.EditionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionPayload>
          }
          aggregate: {
            args: Prisma.EditionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEdition>
          }
          groupBy: {
            args: Prisma.EditionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EditionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EditionCountArgs<ExtArgs>
            result: $Utils.Optional<EditionCountAggregateOutputType> | number
          }
        }
      }
      Card: {
        payload: Prisma.$CardPayload<ExtArgs>
        fields: Prisma.CardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findFirst: {
            args: Prisma.CardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findMany: {
            args: Prisma.CardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          create: {
            args: Prisma.CardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          createMany: {
            args: Prisma.CardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          delete: {
            args: Prisma.CardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          update: {
            args: Prisma.CardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          deleteMany: {
            args: Prisma.CardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          upsert: {
            args: Prisma.CardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          aggregate: {
            args: Prisma.CardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCard>
          }
          groupBy: {
            args: Prisma.CardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardCountArgs<ExtArgs>
            result: $Utils.Optional<CardCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    edition?: EditionOmit
    card?: CardOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EditionCountOutputType
   */

  export type EditionCountOutputType = {
    cards: number
  }

  export type EditionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | EditionCountOutputTypeCountCardsArgs
  }

  // Custom InputTypes
  /**
   * EditionCountOutputType without action
   */
  export type EditionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditionCountOutputType
     */
    select?: EditionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EditionCountOutputType without action
   */
  export type EditionCountOutputTypeCountCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Edition
   */

  export type AggregateEdition = {
    _count: EditionCountAggregateOutputType | null
    _avg: EditionAvgAggregateOutputType | null
    _sum: EditionSumAggregateOutputType | null
    _min: EditionMinAggregateOutputType | null
    _max: EditionMaxAggregateOutputType | null
  }

  export type EditionAvgAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type EditionSumAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type EditionMinAggregateOutputType = {
    id: number | null
    name: string | null
    abbrev: string | null
    year: number | null
  }

  export type EditionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    abbrev: string | null
    year: number | null
  }

  export type EditionCountAggregateOutputType = {
    id: number
    name: number
    abbrev: number
    year: number
    _all: number
  }


  export type EditionAvgAggregateInputType = {
    id?: true
    year?: true
  }

  export type EditionSumAggregateInputType = {
    id?: true
    year?: true
  }

  export type EditionMinAggregateInputType = {
    id?: true
    name?: true
    abbrev?: true
    year?: true
  }

  export type EditionMaxAggregateInputType = {
    id?: true
    name?: true
    abbrev?: true
    year?: true
  }

  export type EditionCountAggregateInputType = {
    id?: true
    name?: true
    abbrev?: true
    year?: true
    _all?: true
  }

  export type EditionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Edition to aggregate.
     */
    where?: EditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Editions to fetch.
     */
    orderBy?: EditionOrderByWithRelationInput | EditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Editions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Editions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Editions
    **/
    _count?: true | EditionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EditionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EditionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EditionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EditionMaxAggregateInputType
  }

  export type GetEditionAggregateType<T extends EditionAggregateArgs> = {
        [P in keyof T & keyof AggregateEdition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEdition[P]>
      : GetScalarType<T[P], AggregateEdition[P]>
  }




  export type EditionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EditionWhereInput
    orderBy?: EditionOrderByWithAggregationInput | EditionOrderByWithAggregationInput[]
    by: EditionScalarFieldEnum[] | EditionScalarFieldEnum
    having?: EditionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EditionCountAggregateInputType | true
    _avg?: EditionAvgAggregateInputType
    _sum?: EditionSumAggregateInputType
    _min?: EditionMinAggregateInputType
    _max?: EditionMaxAggregateInputType
  }

  export type EditionGroupByOutputType = {
    id: number
    name: string
    abbrev: string
    year: number
    _count: EditionCountAggregateOutputType | null
    _avg: EditionAvgAggregateOutputType | null
    _sum: EditionSumAggregateOutputType | null
    _min: EditionMinAggregateOutputType | null
    _max: EditionMaxAggregateOutputType | null
  }

  type GetEditionGroupByPayload<T extends EditionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EditionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EditionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EditionGroupByOutputType[P]>
            : GetScalarType<T[P], EditionGroupByOutputType[P]>
        }
      >
    >


  export type EditionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbrev?: boolean
    year?: boolean
    cards?: boolean | Edition$cardsArgs<ExtArgs>
    _count?: boolean | EditionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["edition"]>

  export type EditionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbrev?: boolean
    year?: boolean
  }, ExtArgs["result"]["edition"]>

  export type EditionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbrev?: boolean
    year?: boolean
  }, ExtArgs["result"]["edition"]>

  export type EditionSelectScalar = {
    id?: boolean
    name?: boolean
    abbrev?: boolean
    year?: boolean
  }

  export type EditionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "abbrev" | "year", ExtArgs["result"]["edition"]>
  export type EditionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | Edition$cardsArgs<ExtArgs>
    _count?: boolean | EditionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EditionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EditionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EditionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Edition"
    objects: {
      cards: Prisma.$CardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      abbrev: string
      year: number
    }, ExtArgs["result"]["edition"]>
    composites: {}
  }

  type EditionGetPayload<S extends boolean | null | undefined | EditionDefaultArgs> = $Result.GetResult<Prisma.$EditionPayload, S>

  type EditionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EditionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EditionCountAggregateInputType | true
    }

  export interface EditionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Edition'], meta: { name: 'Edition' } }
    /**
     * Find zero or one Edition that matches the filter.
     * @param {EditionFindUniqueArgs} args - Arguments to find a Edition
     * @example
     * // Get one Edition
     * const edition = await prisma.edition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EditionFindUniqueArgs>(args: SelectSubset<T, EditionFindUniqueArgs<ExtArgs>>): Prisma__EditionClient<$Result.GetResult<Prisma.$EditionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Edition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EditionFindUniqueOrThrowArgs} args - Arguments to find a Edition
     * @example
     * // Get one Edition
     * const edition = await prisma.edition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EditionFindUniqueOrThrowArgs>(args: SelectSubset<T, EditionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EditionClient<$Result.GetResult<Prisma.$EditionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Edition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditionFindFirstArgs} args - Arguments to find a Edition
     * @example
     * // Get one Edition
     * const edition = await prisma.edition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EditionFindFirstArgs>(args?: SelectSubset<T, EditionFindFirstArgs<ExtArgs>>): Prisma__EditionClient<$Result.GetResult<Prisma.$EditionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Edition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditionFindFirstOrThrowArgs} args - Arguments to find a Edition
     * @example
     * // Get one Edition
     * const edition = await prisma.edition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EditionFindFirstOrThrowArgs>(args?: SelectSubset<T, EditionFindFirstOrThrowArgs<ExtArgs>>): Prisma__EditionClient<$Result.GetResult<Prisma.$EditionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Editions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Editions
     * const editions = await prisma.edition.findMany()
     * 
     * // Get first 10 Editions
     * const editions = await prisma.edition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const editionWithIdOnly = await prisma.edition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EditionFindManyArgs>(args?: SelectSubset<T, EditionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Edition.
     * @param {EditionCreateArgs} args - Arguments to create a Edition.
     * @example
     * // Create one Edition
     * const Edition = await prisma.edition.create({
     *   data: {
     *     // ... data to create a Edition
     *   }
     * })
     * 
     */
    create<T extends EditionCreateArgs>(args: SelectSubset<T, EditionCreateArgs<ExtArgs>>): Prisma__EditionClient<$Result.GetResult<Prisma.$EditionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Editions.
     * @param {EditionCreateManyArgs} args - Arguments to create many Editions.
     * @example
     * // Create many Editions
     * const edition = await prisma.edition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EditionCreateManyArgs>(args?: SelectSubset<T, EditionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Editions and returns the data saved in the database.
     * @param {EditionCreateManyAndReturnArgs} args - Arguments to create many Editions.
     * @example
     * // Create many Editions
     * const edition = await prisma.edition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Editions and only return the `id`
     * const editionWithIdOnly = await prisma.edition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EditionCreateManyAndReturnArgs>(args?: SelectSubset<T, EditionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Edition.
     * @param {EditionDeleteArgs} args - Arguments to delete one Edition.
     * @example
     * // Delete one Edition
     * const Edition = await prisma.edition.delete({
     *   where: {
     *     // ... filter to delete one Edition
     *   }
     * })
     * 
     */
    delete<T extends EditionDeleteArgs>(args: SelectSubset<T, EditionDeleteArgs<ExtArgs>>): Prisma__EditionClient<$Result.GetResult<Prisma.$EditionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Edition.
     * @param {EditionUpdateArgs} args - Arguments to update one Edition.
     * @example
     * // Update one Edition
     * const edition = await prisma.edition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EditionUpdateArgs>(args: SelectSubset<T, EditionUpdateArgs<ExtArgs>>): Prisma__EditionClient<$Result.GetResult<Prisma.$EditionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Editions.
     * @param {EditionDeleteManyArgs} args - Arguments to filter Editions to delete.
     * @example
     * // Delete a few Editions
     * const { count } = await prisma.edition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EditionDeleteManyArgs>(args?: SelectSubset<T, EditionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Editions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Editions
     * const edition = await prisma.edition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EditionUpdateManyArgs>(args: SelectSubset<T, EditionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Editions and returns the data updated in the database.
     * @param {EditionUpdateManyAndReturnArgs} args - Arguments to update many Editions.
     * @example
     * // Update many Editions
     * const edition = await prisma.edition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Editions and only return the `id`
     * const editionWithIdOnly = await prisma.edition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EditionUpdateManyAndReturnArgs>(args: SelectSubset<T, EditionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Edition.
     * @param {EditionUpsertArgs} args - Arguments to update or create a Edition.
     * @example
     * // Update or create a Edition
     * const edition = await prisma.edition.upsert({
     *   create: {
     *     // ... data to create a Edition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Edition we want to update
     *   }
     * })
     */
    upsert<T extends EditionUpsertArgs>(args: SelectSubset<T, EditionUpsertArgs<ExtArgs>>): Prisma__EditionClient<$Result.GetResult<Prisma.$EditionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Editions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditionCountArgs} args - Arguments to filter Editions to count.
     * @example
     * // Count the number of Editions
     * const count = await prisma.edition.count({
     *   where: {
     *     // ... the filter for the Editions we want to count
     *   }
     * })
    **/
    count<T extends EditionCountArgs>(
      args?: Subset<T, EditionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EditionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Edition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EditionAggregateArgs>(args: Subset<T, EditionAggregateArgs>): Prisma.PrismaPromise<GetEditionAggregateType<T>>

    /**
     * Group by Edition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EditionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EditionGroupByArgs['orderBy'] }
        : { orderBy?: EditionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EditionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEditionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Edition model
   */
  readonly fields: EditionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Edition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EditionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cards<T extends Edition$cardsArgs<ExtArgs> = {}>(args?: Subset<T, Edition$cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Edition model
   */
  interface EditionFieldRefs {
    readonly id: FieldRef<"Edition", 'Int'>
    readonly name: FieldRef<"Edition", 'String'>
    readonly abbrev: FieldRef<"Edition", 'String'>
    readonly year: FieldRef<"Edition", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Edition findUnique
   */
  export type EditionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edition
     */
    select?: EditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edition
     */
    omit?: EditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionInclude<ExtArgs> | null
    /**
     * Filter, which Edition to fetch.
     */
    where: EditionWhereUniqueInput
  }

  /**
   * Edition findUniqueOrThrow
   */
  export type EditionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edition
     */
    select?: EditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edition
     */
    omit?: EditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionInclude<ExtArgs> | null
    /**
     * Filter, which Edition to fetch.
     */
    where: EditionWhereUniqueInput
  }

  /**
   * Edition findFirst
   */
  export type EditionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edition
     */
    select?: EditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edition
     */
    omit?: EditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionInclude<ExtArgs> | null
    /**
     * Filter, which Edition to fetch.
     */
    where?: EditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Editions to fetch.
     */
    orderBy?: EditionOrderByWithRelationInput | EditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Editions.
     */
    cursor?: EditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Editions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Editions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Editions.
     */
    distinct?: EditionScalarFieldEnum | EditionScalarFieldEnum[]
  }

  /**
   * Edition findFirstOrThrow
   */
  export type EditionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edition
     */
    select?: EditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edition
     */
    omit?: EditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionInclude<ExtArgs> | null
    /**
     * Filter, which Edition to fetch.
     */
    where?: EditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Editions to fetch.
     */
    orderBy?: EditionOrderByWithRelationInput | EditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Editions.
     */
    cursor?: EditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Editions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Editions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Editions.
     */
    distinct?: EditionScalarFieldEnum | EditionScalarFieldEnum[]
  }

  /**
   * Edition findMany
   */
  export type EditionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edition
     */
    select?: EditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edition
     */
    omit?: EditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionInclude<ExtArgs> | null
    /**
     * Filter, which Editions to fetch.
     */
    where?: EditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Editions to fetch.
     */
    orderBy?: EditionOrderByWithRelationInput | EditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Editions.
     */
    cursor?: EditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Editions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Editions.
     */
    skip?: number
    distinct?: EditionScalarFieldEnum | EditionScalarFieldEnum[]
  }

  /**
   * Edition create
   */
  export type EditionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edition
     */
    select?: EditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edition
     */
    omit?: EditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionInclude<ExtArgs> | null
    /**
     * The data needed to create a Edition.
     */
    data: XOR<EditionCreateInput, EditionUncheckedCreateInput>
  }

  /**
   * Edition createMany
   */
  export type EditionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Editions.
     */
    data: EditionCreateManyInput | EditionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Edition createManyAndReturn
   */
  export type EditionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edition
     */
    select?: EditionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Edition
     */
    omit?: EditionOmit<ExtArgs> | null
    /**
     * The data used to create many Editions.
     */
    data: EditionCreateManyInput | EditionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Edition update
   */
  export type EditionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edition
     */
    select?: EditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edition
     */
    omit?: EditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionInclude<ExtArgs> | null
    /**
     * The data needed to update a Edition.
     */
    data: XOR<EditionUpdateInput, EditionUncheckedUpdateInput>
    /**
     * Choose, which Edition to update.
     */
    where: EditionWhereUniqueInput
  }

  /**
   * Edition updateMany
   */
  export type EditionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Editions.
     */
    data: XOR<EditionUpdateManyMutationInput, EditionUncheckedUpdateManyInput>
    /**
     * Filter which Editions to update
     */
    where?: EditionWhereInput
    /**
     * Limit how many Editions to update.
     */
    limit?: number
  }

  /**
   * Edition updateManyAndReturn
   */
  export type EditionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edition
     */
    select?: EditionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Edition
     */
    omit?: EditionOmit<ExtArgs> | null
    /**
     * The data used to update Editions.
     */
    data: XOR<EditionUpdateManyMutationInput, EditionUncheckedUpdateManyInput>
    /**
     * Filter which Editions to update
     */
    where?: EditionWhereInput
    /**
     * Limit how many Editions to update.
     */
    limit?: number
  }

  /**
   * Edition upsert
   */
  export type EditionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edition
     */
    select?: EditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edition
     */
    omit?: EditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionInclude<ExtArgs> | null
    /**
     * The filter to search for the Edition to update in case it exists.
     */
    where: EditionWhereUniqueInput
    /**
     * In case the Edition found by the `where` argument doesn't exist, create a new Edition with this data.
     */
    create: XOR<EditionCreateInput, EditionUncheckedCreateInput>
    /**
     * In case the Edition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EditionUpdateInput, EditionUncheckedUpdateInput>
  }

  /**
   * Edition delete
   */
  export type EditionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edition
     */
    select?: EditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edition
     */
    omit?: EditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionInclude<ExtArgs> | null
    /**
     * Filter which Edition to delete.
     */
    where: EditionWhereUniqueInput
  }

  /**
   * Edition deleteMany
   */
  export type EditionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Editions to delete
     */
    where?: EditionWhereInput
    /**
     * Limit how many Editions to delete.
     */
    limit?: number
  }

  /**
   * Edition.cards
   */
  export type Edition$cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    where?: CardWhereInput
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    cursor?: CardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Edition without action
   */
  export type EditionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edition
     */
    select?: EditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edition
     */
    omit?: EditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionInclude<ExtArgs> | null
  }


  /**
   * Model Card
   */

  export type AggregateCard = {
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  export type CardAvgAggregateOutputType = {
    id: number | null
    edition_id: number | null
  }

  export type CardSumAggregateOutputType = {
    id: number | null
    edition_id: number | null
  }

  export type CardMinAggregateOutputType = {
    id: number | null
    name: string | null
    collection_1: string | null
    collection_2: string | null
    img_url: string | null
    rarity: string | null
    card_type: string | null
    edition_id: number | null
  }

  export type CardMaxAggregateOutputType = {
    id: number | null
    name: string | null
    collection_1: string | null
    collection_2: string | null
    img_url: string | null
    rarity: string | null
    card_type: string | null
    edition_id: number | null
  }

  export type CardCountAggregateOutputType = {
    id: number
    name: number
    collection_1: number
    collection_2: number
    img_url: number
    rarity: number
    card_type: number
    edition_id: number
    _all: number
  }


  export type CardAvgAggregateInputType = {
    id?: true
    edition_id?: true
  }

  export type CardSumAggregateInputType = {
    id?: true
    edition_id?: true
  }

  export type CardMinAggregateInputType = {
    id?: true
    name?: true
    collection_1?: true
    collection_2?: true
    img_url?: true
    rarity?: true
    card_type?: true
    edition_id?: true
  }

  export type CardMaxAggregateInputType = {
    id?: true
    name?: true
    collection_1?: true
    collection_2?: true
    img_url?: true
    rarity?: true
    card_type?: true
    edition_id?: true
  }

  export type CardCountAggregateInputType = {
    id?: true
    name?: true
    collection_1?: true
    collection_2?: true
    img_url?: true
    rarity?: true
    card_type?: true
    edition_id?: true
    _all?: true
  }

  export type CardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Card to aggregate.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardMaxAggregateInputType
  }

  export type GetCardAggregateType<T extends CardAggregateArgs> = {
        [P in keyof T & keyof AggregateCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard[P]>
      : GetScalarType<T[P], AggregateCard[P]>
  }




  export type CardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
    orderBy?: CardOrderByWithAggregationInput | CardOrderByWithAggregationInput[]
    by: CardScalarFieldEnum[] | CardScalarFieldEnum
    having?: CardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardCountAggregateInputType | true
    _avg?: CardAvgAggregateInputType
    _sum?: CardSumAggregateInputType
    _min?: CardMinAggregateInputType
    _max?: CardMaxAggregateInputType
  }

  export type CardGroupByOutputType = {
    id: number
    name: string
    collection_1: string
    collection_2: string
    img_url: string | null
    rarity: string | null
    card_type: string | null
    edition_id: number
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  type GetCardGroupByPayload<T extends CardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardGroupByOutputType[P]>
            : GetScalarType<T[P], CardGroupByOutputType[P]>
        }
      >
    >


  export type CardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    collection_1?: boolean
    collection_2?: boolean
    img_url?: boolean
    rarity?: boolean
    card_type?: boolean
    edition_id?: boolean
    edition?: boolean | EditionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    collection_1?: boolean
    collection_2?: boolean
    img_url?: boolean
    rarity?: boolean
    card_type?: boolean
    edition_id?: boolean
    edition?: boolean | EditionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    collection_1?: boolean
    collection_2?: boolean
    img_url?: boolean
    rarity?: boolean
    card_type?: boolean
    edition_id?: boolean
    edition?: boolean | EditionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectScalar = {
    id?: boolean
    name?: boolean
    collection_1?: boolean
    collection_2?: boolean
    img_url?: boolean
    rarity?: boolean
    card_type?: boolean
    edition_id?: boolean
  }

  export type CardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "collection_1" | "collection_2" | "img_url" | "rarity" | "card_type" | "edition_id", ExtArgs["result"]["card"]>
  export type CardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    edition?: boolean | EditionDefaultArgs<ExtArgs>
  }
  export type CardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    edition?: boolean | EditionDefaultArgs<ExtArgs>
  }
  export type CardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    edition?: boolean | EditionDefaultArgs<ExtArgs>
  }

  export type $CardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Card"
    objects: {
      edition: Prisma.$EditionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      collection_1: string
      collection_2: string
      img_url: string | null
      rarity: string | null
      card_type: string | null
      edition_id: number
    }, ExtArgs["result"]["card"]>
    composites: {}
  }

  type CardGetPayload<S extends boolean | null | undefined | CardDefaultArgs> = $Result.GetResult<Prisma.$CardPayload, S>

  type CardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardCountAggregateInputType | true
    }

  export interface CardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Card'], meta: { name: 'Card' } }
    /**
     * Find zero or one Card that matches the filter.
     * @param {CardFindUniqueArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardFindUniqueArgs>(args: SelectSubset<T, CardFindUniqueArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Card that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardFindUniqueOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardFindUniqueOrThrowArgs>(args: SelectSubset<T, CardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardFindFirstArgs>(args?: SelectSubset<T, CardFindFirstArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardFindFirstOrThrowArgs>(args?: SelectSubset<T, CardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.card.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.card.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardWithIdOnly = await prisma.card.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardFindManyArgs>(args?: SelectSubset<T, CardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Card.
     * @param {CardCreateArgs} args - Arguments to create a Card.
     * @example
     * // Create one Card
     * const Card = await prisma.card.create({
     *   data: {
     *     // ... data to create a Card
     *   }
     * })
     * 
     */
    create<T extends CardCreateArgs>(args: SelectSubset<T, CardCreateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cards.
     * @param {CardCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardCreateManyArgs>(args?: SelectSubset<T, CardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cards and returns the data saved in the database.
     * @param {CardCreateManyAndReturnArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardCreateManyAndReturnArgs>(args?: SelectSubset<T, CardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Card.
     * @param {CardDeleteArgs} args - Arguments to delete one Card.
     * @example
     * // Delete one Card
     * const Card = await prisma.card.delete({
     *   where: {
     *     // ... filter to delete one Card
     *   }
     * })
     * 
     */
    delete<T extends CardDeleteArgs>(args: SelectSubset<T, CardDeleteArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Card.
     * @param {CardUpdateArgs} args - Arguments to update one Card.
     * @example
     * // Update one Card
     * const card = await prisma.card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardUpdateArgs>(args: SelectSubset<T, CardUpdateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cards.
     * @param {CardDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardDeleteManyArgs>(args?: SelectSubset<T, CardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardUpdateManyArgs>(args: SelectSubset<T, CardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards and returns the data updated in the database.
     * @param {CardUpdateManyAndReturnArgs} args - Arguments to update many Cards.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CardUpdateManyAndReturnArgs>(args: SelectSubset<T, CardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Card.
     * @param {CardUpsertArgs} args - Arguments to update or create a Card.
     * @example
     * // Update or create a Card
     * const card = await prisma.card.upsert({
     *   create: {
     *     // ... data to create a Card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card we want to update
     *   }
     * })
     */
    upsert<T extends CardUpsertArgs>(args: SelectSubset<T, CardUpsertArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.card.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardCountArgs>(
      args?: Subset<T, CardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardAggregateArgs>(args: Subset<T, CardAggregateArgs>): Prisma.PrismaPromise<GetCardAggregateType<T>>

    /**
     * Group by Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardGroupByArgs['orderBy'] }
        : { orderBy?: CardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Card model
   */
  readonly fields: CardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    edition<T extends EditionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EditionDefaultArgs<ExtArgs>>): Prisma__EditionClient<$Result.GetResult<Prisma.$EditionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Card model
   */
  interface CardFieldRefs {
    readonly id: FieldRef<"Card", 'Int'>
    readonly name: FieldRef<"Card", 'String'>
    readonly collection_1: FieldRef<"Card", 'String'>
    readonly collection_2: FieldRef<"Card", 'String'>
    readonly img_url: FieldRef<"Card", 'String'>
    readonly rarity: FieldRef<"Card", 'String'>
    readonly card_type: FieldRef<"Card", 'String'>
    readonly edition_id: FieldRef<"Card", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Card findUnique
   */
  export type CardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findUniqueOrThrow
   */
  export type CardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findFirst
   */
  export type CardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findFirstOrThrow
   */
  export type CardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findMany
   */
  export type CardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card create
   */
  export type CardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to create a Card.
     */
    data: XOR<CardCreateInput, CardUncheckedCreateInput>
  }

  /**
   * Card createMany
   */
  export type CardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Card createManyAndReturn
   */
  export type CardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Card update
   */
  export type CardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to update a Card.
     */
    data: XOR<CardUpdateInput, CardUncheckedUpdateInput>
    /**
     * Choose, which Card to update.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card updateMany
   */
  export type CardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
  }

  /**
   * Card updateManyAndReturn
   */
  export type CardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Card upsert
   */
  export type CardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The filter to search for the Card to update in case it exists.
     */
    where: CardWhereUniqueInput
    /**
     * In case the Card found by the `where` argument doesn't exist, create a new Card with this data.
     */
    create: XOR<CardCreateInput, CardUncheckedCreateInput>
    /**
     * In case the Card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardUpdateInput, CardUncheckedUpdateInput>
  }

  /**
   * Card delete
   */
  export type CardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter which Card to delete.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card deleteMany
   */
  export type CardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to delete.
     */
    limit?: number
  }

  /**
   * Card without action
   */
  export type CardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EditionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    abbrev: 'abbrev',
    year: 'year'
  };

  export type EditionScalarFieldEnum = (typeof EditionScalarFieldEnum)[keyof typeof EditionScalarFieldEnum]


  export const CardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    collection_1: 'collection_1',
    collection_2: 'collection_2',
    img_url: 'img_url',
    rarity: 'rarity',
    card_type: 'card_type',
    edition_id: 'edition_id'
  };

  export type CardScalarFieldEnum = (typeof CardScalarFieldEnum)[keyof typeof CardScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EditionWhereInput = {
    AND?: EditionWhereInput | EditionWhereInput[]
    OR?: EditionWhereInput[]
    NOT?: EditionWhereInput | EditionWhereInput[]
    id?: IntFilter<"Edition"> | number
    name?: StringFilter<"Edition"> | string
    abbrev?: StringFilter<"Edition"> | string
    year?: IntFilter<"Edition"> | number
    cards?: CardListRelationFilter
  }

  export type EditionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    abbrev?: SortOrder
    year?: SortOrder
    cards?: CardOrderByRelationAggregateInput
  }

  export type EditionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    abbrev_year?: EditionAbbrevYearCompoundUniqueInput
    AND?: EditionWhereInput | EditionWhereInput[]
    OR?: EditionWhereInput[]
    NOT?: EditionWhereInput | EditionWhereInput[]
    name?: StringFilter<"Edition"> | string
    abbrev?: StringFilter<"Edition"> | string
    year?: IntFilter<"Edition"> | number
    cards?: CardListRelationFilter
  }, "id" | "abbrev_year">

  export type EditionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    abbrev?: SortOrder
    year?: SortOrder
    _count?: EditionCountOrderByAggregateInput
    _avg?: EditionAvgOrderByAggregateInput
    _max?: EditionMaxOrderByAggregateInput
    _min?: EditionMinOrderByAggregateInput
    _sum?: EditionSumOrderByAggregateInput
  }

  export type EditionScalarWhereWithAggregatesInput = {
    AND?: EditionScalarWhereWithAggregatesInput | EditionScalarWhereWithAggregatesInput[]
    OR?: EditionScalarWhereWithAggregatesInput[]
    NOT?: EditionScalarWhereWithAggregatesInput | EditionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Edition"> | number
    name?: StringWithAggregatesFilter<"Edition"> | string
    abbrev?: StringWithAggregatesFilter<"Edition"> | string
    year?: IntWithAggregatesFilter<"Edition"> | number
  }

  export type CardWhereInput = {
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    id?: IntFilter<"Card"> | number
    name?: StringFilter<"Card"> | string
    collection_1?: StringFilter<"Card"> | string
    collection_2?: StringFilter<"Card"> | string
    img_url?: StringNullableFilter<"Card"> | string | null
    rarity?: StringNullableFilter<"Card"> | string | null
    card_type?: StringNullableFilter<"Card"> | string | null
    edition_id?: IntFilter<"Card"> | number
    edition?: XOR<EditionScalarRelationFilter, EditionWhereInput>
  }

  export type CardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    collection_1?: SortOrder
    collection_2?: SortOrder
    img_url?: SortOrderInput | SortOrder
    rarity?: SortOrderInput | SortOrder
    card_type?: SortOrderInput | SortOrder
    edition_id?: SortOrder
    edition?: EditionOrderByWithRelationInput
  }

  export type CardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    collection_1_collection_2_edition_id?: CardCollection_1Collection_2Edition_idCompoundUniqueInput
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    name?: StringFilter<"Card"> | string
    collection_1?: StringFilter<"Card"> | string
    collection_2?: StringFilter<"Card"> | string
    img_url?: StringNullableFilter<"Card"> | string | null
    rarity?: StringNullableFilter<"Card"> | string | null
    card_type?: StringNullableFilter<"Card"> | string | null
    edition_id?: IntFilter<"Card"> | number
    edition?: XOR<EditionScalarRelationFilter, EditionWhereInput>
  }, "id" | "collection_1_collection_2_edition_id">

  export type CardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    collection_1?: SortOrder
    collection_2?: SortOrder
    img_url?: SortOrderInput | SortOrder
    rarity?: SortOrderInput | SortOrder
    card_type?: SortOrderInput | SortOrder
    edition_id?: SortOrder
    _count?: CardCountOrderByAggregateInput
    _avg?: CardAvgOrderByAggregateInput
    _max?: CardMaxOrderByAggregateInput
    _min?: CardMinOrderByAggregateInput
    _sum?: CardSumOrderByAggregateInput
  }

  export type CardScalarWhereWithAggregatesInput = {
    AND?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    OR?: CardScalarWhereWithAggregatesInput[]
    NOT?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Card"> | number
    name?: StringWithAggregatesFilter<"Card"> | string
    collection_1?: StringWithAggregatesFilter<"Card"> | string
    collection_2?: StringWithAggregatesFilter<"Card"> | string
    img_url?: StringNullableWithAggregatesFilter<"Card"> | string | null
    rarity?: StringNullableWithAggregatesFilter<"Card"> | string | null
    card_type?: StringNullableWithAggregatesFilter<"Card"> | string | null
    edition_id?: IntWithAggregatesFilter<"Card"> | number
  }

  export type EditionCreateInput = {
    name: string
    abbrev: string
    year: number
    cards?: CardCreateNestedManyWithoutEditionInput
  }

  export type EditionUncheckedCreateInput = {
    id?: number
    name: string
    abbrev: string
    year: number
    cards?: CardUncheckedCreateNestedManyWithoutEditionInput
  }

  export type EditionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbrev?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    cards?: CardUpdateManyWithoutEditionNestedInput
  }

  export type EditionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbrev?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    cards?: CardUncheckedUpdateManyWithoutEditionNestedInput
  }

  export type EditionCreateManyInput = {
    id?: number
    name: string
    abbrev: string
    year: number
  }

  export type EditionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbrev?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type EditionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbrev?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type CardCreateInput = {
    name: string
    collection_1: string
    collection_2: string
    img_url?: string | null
    rarity?: string | null
    card_type?: string | null
    edition: EditionCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateInput = {
    id?: number
    name: string
    collection_1: string
    collection_2: string
    img_url?: string | null
    rarity?: string | null
    card_type?: string | null
    edition_id: number
  }

  export type CardUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    collection_1?: StringFieldUpdateOperationsInput | string
    collection_2?: StringFieldUpdateOperationsInput | string
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    card_type?: NullableStringFieldUpdateOperationsInput | string | null
    edition?: EditionUpdateOneRequiredWithoutCardsNestedInput
  }

  export type CardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    collection_1?: StringFieldUpdateOperationsInput | string
    collection_2?: StringFieldUpdateOperationsInput | string
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    card_type?: NullableStringFieldUpdateOperationsInput | string | null
    edition_id?: IntFieldUpdateOperationsInput | number
  }

  export type CardCreateManyInput = {
    id?: number
    name: string
    collection_1: string
    collection_2: string
    img_url?: string | null
    rarity?: string | null
    card_type?: string | null
    edition_id: number
  }

  export type CardUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    collection_1?: StringFieldUpdateOperationsInput | string
    collection_2?: StringFieldUpdateOperationsInput | string
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    card_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    collection_1?: StringFieldUpdateOperationsInput | string
    collection_2?: StringFieldUpdateOperationsInput | string
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    card_type?: NullableStringFieldUpdateOperationsInput | string | null
    edition_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CardListRelationFilter = {
    every?: CardWhereInput
    some?: CardWhereInput
    none?: CardWhereInput
  }

  export type CardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EditionAbbrevYearCompoundUniqueInput = {
    abbrev: string
    year: number
  }

  export type EditionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbrev?: SortOrder
    year?: SortOrder
  }

  export type EditionAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type EditionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbrev?: SortOrder
    year?: SortOrder
  }

  export type EditionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbrev?: SortOrder
    year?: SortOrder
  }

  export type EditionSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EditionScalarRelationFilter = {
    is?: EditionWhereInput
    isNot?: EditionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CardCollection_1Collection_2Edition_idCompoundUniqueInput = {
    collection_1: string
    collection_2: string
    edition_id: number
  }

  export type CardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    collection_1?: SortOrder
    collection_2?: SortOrder
    img_url?: SortOrder
    rarity?: SortOrder
    card_type?: SortOrder
    edition_id?: SortOrder
  }

  export type CardAvgOrderByAggregateInput = {
    id?: SortOrder
    edition_id?: SortOrder
  }

  export type CardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    collection_1?: SortOrder
    collection_2?: SortOrder
    img_url?: SortOrder
    rarity?: SortOrder
    card_type?: SortOrder
    edition_id?: SortOrder
  }

  export type CardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    collection_1?: SortOrder
    collection_2?: SortOrder
    img_url?: SortOrder
    rarity?: SortOrder
    card_type?: SortOrder
    edition_id?: SortOrder
  }

  export type CardSumOrderByAggregateInput = {
    id?: SortOrder
    edition_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CardCreateNestedManyWithoutEditionInput = {
    create?: XOR<CardCreateWithoutEditionInput, CardUncheckedCreateWithoutEditionInput> | CardCreateWithoutEditionInput[] | CardUncheckedCreateWithoutEditionInput[]
    connectOrCreate?: CardCreateOrConnectWithoutEditionInput | CardCreateOrConnectWithoutEditionInput[]
    createMany?: CardCreateManyEditionInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type CardUncheckedCreateNestedManyWithoutEditionInput = {
    create?: XOR<CardCreateWithoutEditionInput, CardUncheckedCreateWithoutEditionInput> | CardCreateWithoutEditionInput[] | CardUncheckedCreateWithoutEditionInput[]
    connectOrCreate?: CardCreateOrConnectWithoutEditionInput | CardCreateOrConnectWithoutEditionInput[]
    createMany?: CardCreateManyEditionInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CardUpdateManyWithoutEditionNestedInput = {
    create?: XOR<CardCreateWithoutEditionInput, CardUncheckedCreateWithoutEditionInput> | CardCreateWithoutEditionInput[] | CardUncheckedCreateWithoutEditionInput[]
    connectOrCreate?: CardCreateOrConnectWithoutEditionInput | CardCreateOrConnectWithoutEditionInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutEditionInput | CardUpsertWithWhereUniqueWithoutEditionInput[]
    createMany?: CardCreateManyEditionInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutEditionInput | CardUpdateWithWhereUniqueWithoutEditionInput[]
    updateMany?: CardUpdateManyWithWhereWithoutEditionInput | CardUpdateManyWithWhereWithoutEditionInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type CardUncheckedUpdateManyWithoutEditionNestedInput = {
    create?: XOR<CardCreateWithoutEditionInput, CardUncheckedCreateWithoutEditionInput> | CardCreateWithoutEditionInput[] | CardUncheckedCreateWithoutEditionInput[]
    connectOrCreate?: CardCreateOrConnectWithoutEditionInput | CardCreateOrConnectWithoutEditionInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutEditionInput | CardUpsertWithWhereUniqueWithoutEditionInput[]
    createMany?: CardCreateManyEditionInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutEditionInput | CardUpdateWithWhereUniqueWithoutEditionInput[]
    updateMany?: CardUpdateManyWithWhereWithoutEditionInput | CardUpdateManyWithWhereWithoutEditionInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type EditionCreateNestedOneWithoutCardsInput = {
    create?: XOR<EditionCreateWithoutCardsInput, EditionUncheckedCreateWithoutCardsInput>
    connectOrCreate?: EditionCreateOrConnectWithoutCardsInput
    connect?: EditionWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EditionUpdateOneRequiredWithoutCardsNestedInput = {
    create?: XOR<EditionCreateWithoutCardsInput, EditionUncheckedCreateWithoutCardsInput>
    connectOrCreate?: EditionCreateOrConnectWithoutCardsInput
    upsert?: EditionUpsertWithoutCardsInput
    connect?: EditionWhereUniqueInput
    update?: XOR<XOR<EditionUpdateToOneWithWhereWithoutCardsInput, EditionUpdateWithoutCardsInput>, EditionUncheckedUpdateWithoutCardsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CardCreateWithoutEditionInput = {
    name: string
    collection_1: string
    collection_2: string
    img_url?: string | null
    rarity?: string | null
    card_type?: string | null
  }

  export type CardUncheckedCreateWithoutEditionInput = {
    id?: number
    name: string
    collection_1: string
    collection_2: string
    img_url?: string | null
    rarity?: string | null
    card_type?: string | null
  }

  export type CardCreateOrConnectWithoutEditionInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutEditionInput, CardUncheckedCreateWithoutEditionInput>
  }

  export type CardCreateManyEditionInputEnvelope = {
    data: CardCreateManyEditionInput | CardCreateManyEditionInput[]
    skipDuplicates?: boolean
  }

  export type CardUpsertWithWhereUniqueWithoutEditionInput = {
    where: CardWhereUniqueInput
    update: XOR<CardUpdateWithoutEditionInput, CardUncheckedUpdateWithoutEditionInput>
    create: XOR<CardCreateWithoutEditionInput, CardUncheckedCreateWithoutEditionInput>
  }

  export type CardUpdateWithWhereUniqueWithoutEditionInput = {
    where: CardWhereUniqueInput
    data: XOR<CardUpdateWithoutEditionInput, CardUncheckedUpdateWithoutEditionInput>
  }

  export type CardUpdateManyWithWhereWithoutEditionInput = {
    where: CardScalarWhereInput
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyWithoutEditionInput>
  }

  export type CardScalarWhereInput = {
    AND?: CardScalarWhereInput | CardScalarWhereInput[]
    OR?: CardScalarWhereInput[]
    NOT?: CardScalarWhereInput | CardScalarWhereInput[]
    id?: IntFilter<"Card"> | number
    name?: StringFilter<"Card"> | string
    collection_1?: StringFilter<"Card"> | string
    collection_2?: StringFilter<"Card"> | string
    img_url?: StringNullableFilter<"Card"> | string | null
    rarity?: StringNullableFilter<"Card"> | string | null
    card_type?: StringNullableFilter<"Card"> | string | null
    edition_id?: IntFilter<"Card"> | number
  }

  export type EditionCreateWithoutCardsInput = {
    name: string
    abbrev: string
    year: number
  }

  export type EditionUncheckedCreateWithoutCardsInput = {
    id?: number
    name: string
    abbrev: string
    year: number
  }

  export type EditionCreateOrConnectWithoutCardsInput = {
    where: EditionWhereUniqueInput
    create: XOR<EditionCreateWithoutCardsInput, EditionUncheckedCreateWithoutCardsInput>
  }

  export type EditionUpsertWithoutCardsInput = {
    update: XOR<EditionUpdateWithoutCardsInput, EditionUncheckedUpdateWithoutCardsInput>
    create: XOR<EditionCreateWithoutCardsInput, EditionUncheckedCreateWithoutCardsInput>
    where?: EditionWhereInput
  }

  export type EditionUpdateToOneWithWhereWithoutCardsInput = {
    where?: EditionWhereInput
    data: XOR<EditionUpdateWithoutCardsInput, EditionUncheckedUpdateWithoutCardsInput>
  }

  export type EditionUpdateWithoutCardsInput = {
    name?: StringFieldUpdateOperationsInput | string
    abbrev?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type EditionUncheckedUpdateWithoutCardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    abbrev?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type CardCreateManyEditionInput = {
    id?: number
    name: string
    collection_1: string
    collection_2: string
    img_url?: string | null
    rarity?: string | null
    card_type?: string | null
  }

  export type CardUpdateWithoutEditionInput = {
    name?: StringFieldUpdateOperationsInput | string
    collection_1?: StringFieldUpdateOperationsInput | string
    collection_2?: StringFieldUpdateOperationsInput | string
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    card_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CardUncheckedUpdateWithoutEditionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    collection_1?: StringFieldUpdateOperationsInput | string
    collection_2?: StringFieldUpdateOperationsInput | string
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    card_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CardUncheckedUpdateManyWithoutEditionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    collection_1?: StringFieldUpdateOperationsInput | string
    collection_2?: StringFieldUpdateOperationsInput | string
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    rarity?: NullableStringFieldUpdateOperationsInput | string | null
    card_type?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}