class Product {
    id: number;
    name: string;
    price: number;
    out_of_stock: boolean;
  
    constructor(id: number, name: string, price: number, out_of_stock: boolean) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.out_of_stock = out_of_stock;
    }
  
    update_stock() : void {
      this.out_of_stock = !this.out_of_stock;
    }
  }
  
  let p1 = new Product(1, 'KFC', 10.9, false);
  let p2 = new Product(2, 'Lotteria', 11.9, true);
  let p3 = new Product(3, 'Jollibee', 9.5, false);
  
  console.log(p1, p2, p3);
  
  p2.update_stock();
  
  console.log(p1, p2, p3);
  
  // try assigning invalid values to the objects
  // or object attributes to see error messages immediately
  
  
  
  function maxNum(arr: number[]): number {
    if (arr.length == 0) {
      return Number.NaN;
    }
    let result = Number.NEGATIVE_INFINITY;
    arr.forEach(v => result = (v > result) ? v : result);
    return result;
  }
  
  console.log(maxNum([]));
  console.log(maxNum([1]));
  console.log(maxNum([1, 2, 3]));
  console.log(maxNum([-10, 10, 2]));
  console.log(maxNum([3, 3, 2, 2, -1]));
  