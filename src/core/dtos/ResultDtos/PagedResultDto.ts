export default class PagedResultDto<T> {
  totalCount: number = 0;
  items: Array<T> = [];
}
