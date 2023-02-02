export class Product {
  id!: string
  name: string;
  inInventory: number;
  enabledProduct: boolean;
  min: number;
  max: number;
  image: string;

  constructor() {
    this.name='';
    this.inInventory=0;
    this.min=0;
    this.max=0;
    this.enabledProduct=false;
    this.image=''
  }

}
