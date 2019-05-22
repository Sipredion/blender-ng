export class ActionRowItem {
  href: string;
  type: string;
  title: string;

  constructor(options: ActionRowItem) {
    // Only works if you expect to receive the entire model every time
    Object.assign(this, options);
  }
}
