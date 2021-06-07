
const refs = {
   ulList: document.querySelector('#ingredients'),
   arrList: [],

    ingredients: [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ],

  allIngredients(ingredients) {
    ingredients.map((ingredient) => {
      const itemIngredient = document.createElement('li');
      itemIngredient.textContent = ingredient;
      this.arrList.push(itemIngredient);
      
    });
    this.ulList.append(...this.arrList)
  }
}

refs.allIngredients(refs.ingredients);