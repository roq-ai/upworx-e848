/* eslint-disable */
import { type CheckSelect, fetcher, marshal, makeUrl, RoqPlatformClient, BrowserCookieAuth } from '@roq/client';
import { Fetcher, SWRConfiguration } from 'swr';
import type { Prisma, application, company, contract, job_posting, user } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';

export type RequestOptions = Record<string, any>;
export type SWRRequestOptions<Result, Error = any> = {
  disabled?: boolean;
  initialData?: Result;
} & SWRConfiguration<Result, Error, Fetcher<Result>>;

export const defaultEndpoint = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;

interface ApplicationSDK {
  create: <
    T extends Prisma.applicationCreateArgs,
    R extends CheckSelect<T, application, Prisma.applicationGetPayload<T>>,
  >(
    data: Prisma.SelectSubset<T, Prisma.applicationCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.applicationCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.applicationCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.applicationUpdateArgs, R extends Prisma.applicationGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.applicationUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.applicationUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.applicationUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.applicationUpsertArgs, R extends Prisma.applicationGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.applicationUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.applicationDeleteArgs, R extends Prisma.applicationGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.applicationDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.applicationDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.applicationDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.applicationFindManyArgs,
    R extends GetFindResult<Prisma.$applicationPayload<DefaultArgs>, T>[],
  >(
    args: Prisma.SelectSubset<T, Prisma.applicationFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.applicationCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.applicationCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.applicationFindManyArgs,
    R extends GetFindResult<Prisma.$applicationPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.applicationFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.applicationFindFirstArgs,
    R extends GetFindResult<Prisma.$applicationPayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.applicationFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface CompanySDK {
  create: <T extends Prisma.companyCreateArgs, R extends CheckSelect<T, company, Prisma.companyGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.companyCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.companyCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.companyCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.companyUpdateArgs, R extends Prisma.companyGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.companyUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.companyUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.companyUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.companyUpsertArgs, R extends Prisma.companyGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.companyUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.companyDeleteArgs, R extends Prisma.companyGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.companyDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.companyDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.companyDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.companyFindManyArgs, R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[]>(
    args: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.companyCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.companyCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.companyFindManyArgs,
    R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.companyFindFirstArgs, R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.companyFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface ContractSDK {
  create: <T extends Prisma.contractCreateArgs, R extends CheckSelect<T, contract, Prisma.contractGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.contractCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.contractCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.contractCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.contractUpdateArgs, R extends Prisma.contractGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.contractUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.contractUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.contractUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.contractUpsertArgs, R extends Prisma.contractGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.contractUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.contractDeleteArgs, R extends Prisma.contractGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.contractDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.contractDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.contractDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.contractFindManyArgs, R extends GetFindResult<Prisma.$contractPayload<DefaultArgs>, T>[]>(
    args: Prisma.SelectSubset<T, Prisma.contractFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.contractCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.contractCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.contractFindManyArgs,
    R extends GetFindResult<Prisma.$contractPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.contractFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.contractFindFirstArgs, R extends GetFindResult<Prisma.$contractPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.contractFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface Job_postingSDK {
  create: <
    T extends Prisma.job_postingCreateArgs,
    R extends CheckSelect<T, job_posting, Prisma.job_postingGetPayload<T>>,
  >(
    data: Prisma.SelectSubset<T, Prisma.job_postingCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.job_postingCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.job_postingCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.job_postingUpdateArgs, R extends Prisma.job_postingGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.job_postingUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.job_postingUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.job_postingUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.job_postingUpsertArgs, R extends Prisma.job_postingGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.job_postingUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.job_postingDeleteArgs, R extends Prisma.job_postingGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.job_postingDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.job_postingDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.job_postingDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.job_postingFindManyArgs,
    R extends GetFindResult<Prisma.$job_postingPayload<DefaultArgs>, T>[],
  >(
    args: Prisma.SelectSubset<T, Prisma.job_postingFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.job_postingCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.job_postingCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.job_postingFindManyArgs,
    R extends GetFindResult<Prisma.$job_postingPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.job_postingFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.job_postingFindFirstArgs,
    R extends GetFindResult<Prisma.$job_postingPayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.job_postingFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface UserSDK {
  create: <T extends Prisma.userCreateArgs, R extends CheckSelect<T, user, Prisma.userGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.userCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.userUpdateArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.userFindManyArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]>(
    args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.userCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.userCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.userFindManyArgs,
    R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.userFindFirstArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

export class RoqClient extends RoqPlatformClient {
  private endpoint: string;
  private baseOptions: RequestOptions;

  public application: ApplicationSDK;

  public company: CompanySDK;

  public contract: ContractSDK;

  public job_posting: Job_postingSDK;

  public user: UserSDK;

  constructor(backendHost: string, platformHost: string, baseOptions: RequestOptions = {}) {
    super({
      host: platformHost,
      auth: new BrowserCookieAuth(),
    });
    this.endpoint = backendHost;
    this.baseOptions = baseOptions;
    this.initSDK();
  }

  private initSDK() {
    const ctx = this;

    this.application = {
      create: async function createApplication<
        T extends Prisma.applicationCreateArgs,
        R extends CheckSelect<T, application, Prisma.applicationGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.applicationCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/application/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyApplication<
        T extends Prisma.applicationCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.applicationCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/application/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateApplication<
        T extends Prisma.applicationUpdateArgs,
        R extends Prisma.applicationGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.applicationUpdateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/application/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyApplication<
        T extends Prisma.applicationUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.applicationUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/application/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertApplication<
        T extends Prisma.applicationUpsertArgs,
        R extends Prisma.applicationGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.applicationUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/application/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteApplication<
        T extends Prisma.applicationDeleteArgs,
        R extends Prisma.applicationGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.applicationDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/application/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyApplication<
        T extends Prisma.applicationDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.applicationDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/application/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyApplication<
        T extends Prisma.applicationFindManyArgs,
        R extends GetFindResult<Prisma.$applicationPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.applicationFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/application/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countApplication<T extends Prisma.applicationCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.applicationCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/application/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountApplication<
        T extends Prisma.applicationFindManyArgs,
        R extends GetFindResult<Prisma.$applicationPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.applicationFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.application.findMany(args, options),
          ctx.application.count(
            {
              distinct,
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstApplication<
        T extends Prisma.applicationFindFirstArgs,
        R extends GetFindResult<Prisma.$applicationPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.applicationFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/application/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.company = {
      create: async function createCompany<
        T extends Prisma.companyCreateArgs,
        R extends CheckSelect<T, company, Prisma.companyGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.companyCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/company/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyCompany<
        T extends Prisma.companyCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.companyCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/company/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateCompany<T extends Prisma.companyUpdateArgs, R extends Prisma.companyGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.companyUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/company/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyCompany<
        T extends Prisma.companyUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.companyUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/company/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertCompany<T extends Prisma.companyUpsertArgs, R extends Prisma.companyGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.companyUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/company/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteCompany<T extends Prisma.companyDeleteArgs, R extends Prisma.companyGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.companyDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/company/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyCompany<
        T extends Prisma.companyDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.companyDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/company/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyCompany<
        T extends Prisma.companyFindManyArgs,
        R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/company/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countCompany<T extends Prisma.companyCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.companyCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/company/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountCompany<
        T extends Prisma.companyFindManyArgs,
        R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.company.findMany(args, options),
          ctx.company.count(
            {
              distinct,
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstCompany<
        T extends Prisma.companyFindFirstArgs,
        R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.companyFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/company/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.contract = {
      create: async function createContract<
        T extends Prisma.contractCreateArgs,
        R extends CheckSelect<T, contract, Prisma.contractGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.contractCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/contract/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyContract<
        T extends Prisma.contractCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.contractCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/contract/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateContract<
        T extends Prisma.contractUpdateArgs,
        R extends Prisma.contractGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.contractUpdateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/contract/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyContract<
        T extends Prisma.contractUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.contractUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/contract/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertContract<
        T extends Prisma.contractUpsertArgs,
        R extends Prisma.contractGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.contractUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/contract/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteContract<
        T extends Prisma.contractDeleteArgs,
        R extends Prisma.contractGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.contractDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/contract/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyContract<
        T extends Prisma.contractDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.contractDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/contract/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyContract<
        T extends Prisma.contractFindManyArgs,
        R extends GetFindResult<Prisma.$contractPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.contractFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/contract/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countContract<T extends Prisma.contractCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.contractCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/contract/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountContract<
        T extends Prisma.contractFindManyArgs,
        R extends GetFindResult<Prisma.$contractPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.contractFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.contract.findMany(args, options),
          ctx.contract.count(
            {
              distinct,
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstContract<
        T extends Prisma.contractFindFirstArgs,
        R extends GetFindResult<Prisma.$contractPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.contractFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/contract/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.job_posting = {
      create: async function createJob_posting<
        T extends Prisma.job_postingCreateArgs,
        R extends CheckSelect<T, job_posting, Prisma.job_postingGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.job_postingCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/job_posting/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyJob_posting<
        T extends Prisma.job_postingCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.job_postingCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/job_posting/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateJob_posting<
        T extends Prisma.job_postingUpdateArgs,
        R extends Prisma.job_postingGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.job_postingUpdateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/job_posting/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyJob_posting<
        T extends Prisma.job_postingUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.job_postingUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/job_posting/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertJob_posting<
        T extends Prisma.job_postingUpsertArgs,
        R extends Prisma.job_postingGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.job_postingUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/job_posting/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteJob_posting<
        T extends Prisma.job_postingDeleteArgs,
        R extends Prisma.job_postingGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.job_postingDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/job_posting/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyJob_posting<
        T extends Prisma.job_postingDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.job_postingDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/job_posting/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyJob_posting<
        T extends Prisma.job_postingFindManyArgs,
        R extends GetFindResult<Prisma.$job_postingPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.job_postingFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/job_posting/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countJob_posting<T extends Prisma.job_postingCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.job_postingCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/job_posting/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountJob_posting<
        T extends Prisma.job_postingFindManyArgs,
        R extends GetFindResult<Prisma.$job_postingPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.job_postingFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.job_posting.findMany(args, options),
          ctx.job_posting.count(
            {
              distinct,
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstJob_posting<
        T extends Prisma.job_postingFindFirstArgs,
        R extends GetFindResult<Prisma.$job_postingPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.job_postingFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/job_posting/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.user = {
      create: async function createUser<
        T extends Prisma.userCreateArgs,
        R extends CheckSelect<T, user, Prisma.userGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.userCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyUser<T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateUser<T extends Prisma.userUpdateArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyUser<T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertUser<T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteUser<T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyUser<T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countUser<T extends Prisma.userCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.userCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.user.findMany(args, options),
          ctx.user.count(
            {
              distinct,
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstUser<
        T extends Prisma.userFindFirstArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };
  }
}
