
export class PromiseMock {
  constructor(reason) {
    this.reason = reason
  }

  then(callback) {
    this.reason = callback(this.reason)
    return this
  }
}

export const resolve = reason => new PromiseMock(reason)
