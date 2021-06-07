
const refs = {

  listCategories: document.querySelectorAll('.item'),
 
  getCategories() {
      this.listCategories.forEach((categorie) => {
          console.log(`Категория: ${categorie.firstElementChild.textContent}`);

          console.log(`Количество элементов: ${categorie.lastElementChild.children.length}`)
      })
  }
  
 


}

refs.getCategories()