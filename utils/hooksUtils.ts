interface PromiseClosureGeneric {
  <T extends (...args: any) => any>(fn: T): <RT>(
    ...args: Parameters<T>
  ) => Promise<RT>;
}
export const withPromiseTryCatch: PromiseClosureGeneric =
  (fn) =>
  (...args) =>
    new Promise(async (resolve, reject) => {
      try {
        const result = await fn(args);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
