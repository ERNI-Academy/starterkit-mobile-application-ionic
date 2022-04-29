export default class InfoItem {
  public id: string;
  public title: string;
  public description: string;

  constructor(fields: Partial<InfoItem>) {
    Object.assign(this, fields);
  }
}
