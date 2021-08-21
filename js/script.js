const validadeObjectParam = (object, objectKeys) => {
  try {
    if(typeof object != "object") return false
    let isValid = true
    const arrKeys = Object.keys(objectKeys)
    arrKeys.forEach(key => {
      if(!object[key]) isValid = false
    })

    return isValid
  }catch(e) {
    console.error("Não foi possível fazer a validação do objeto.")
    console.error(e)
    return false
  }
} 

const headerListGenerator = (linkSettings) => {
  try {
    if(!validadeObjectParam(linkSettings, { href: "", content: "" })) throw "Parâmetro(1) linkSettings deve ser do tipo objeto no modelo { href: '', content: '' }"

    const listItem = document.createElement("li")
    listItem.classList.add("list__item")
    const listLink = document.createElement("a")
    const { href, content } = linkSettings
    listLink.setAttribute("href", href)
    listLink.innerHTML = content

    listItem.appendChild(listLink)

    const headerListContainer = document.querySelector(".header__list")
    headerListContainer.appendChild(listItem)
  }catch(e) {
    console.error("Não foi possível gerar o elemento da lista do cabeçalho.")
    console.error(e)
  }
}

for(let i = 1; i < 4; i++) {
  headerListGenerator({ href: "#", content: `Item - ${i}` })
}

const cardGenerator = (cardSettings) => {
  try {
    if(!validadeObjectParam(cardSettings, { src: "", alt: "", title: "", content: "" })) throw "Parâmetro(1) cardSettings deve ser do tipo objeto no modelo { alt: '', src: '', title: '', content: '' }"
    
    const { alt, src, title, content } = cardSettings
    const div = document.createElement("div")
    div.classList.add("card__item")

    const h2 = document.createElement("h2")
    h2.classList.add("card__title")
    h2.innerHTML = title
    div.appendChild(h2)
  
    const img = document.createElement("img")
    img.setAttribute("src", src)
    img.setAttribute("alt", alt)
    img.classList.add("card__image")
    div.appendChild(img)

    const paragraph = document.createElement("p")
    paragraph.innerHTML = content
    paragraph.classList.add("card__content")
    div.appendChild(paragraph)
  
    const cardsContainer = document.querySelector(".cards")
    cardsContainer.appendChild(div)
  }catch(e) {
    console.error("Não foi possivel gerar o card.")
    console.error(e)
  }
}

for(let i = 1; i < 15; i++) {
  cardGenerator({ alt: `Logo ${i}`, src: "https://via.placeholder.com/400x200", title: "Lorem ipsum", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec ipsum ac ante suscipit accumsan. Vivamus id nulla eleifend tortor varius molestie. Phasellus vitae dui in arcu iaculis tincidunt. Nam eget nisl dolor. Curabitur a luctus massa. Curabitur ut lacus rutrum, accumsan ex eu, vehicula augue" })
}


const footerItemGenerator = (footerItemSettings) => {
  try {
    if(!validadeObjectParam(footerItemSettings, { iconPrefix: "", iconValue: "", content: "" })) throw "Parâmetro(1) footerItemSettings deve ser do tipo objeto no modelo { iconPrefix: '', iconValue: '', href: '', content: '' }, onde a chave 'href' é opcional"
    const paragraph = document.createElement("p")
    paragraph.classList.add("footer__item")
    const icon = document.createElement("i")
    const { iconPrefix, iconValue, href, content } = footerItemSettings
    icon.classList.add(iconPrefix)
    icon.classList.add(iconValue)
    paragraph.appendChild(icon)

    if(href) {
      const link = document.createElement("a")
      link.setAttribute("href", href)
      link.innerHTML = content
      paragraph.appendChild(link)
    }
    
    paragraph.innerHTML += href ? "" : content

    const footerContainer = document.querySelector(".footer")
    footerContainer.appendChild(paragraph)
  }catch(e) {
    console.error("Não foi possível gerar o item do rodapé.")
    console.error(e)
  }
}

footerItemGenerator({ iconPrefix: 'far', iconValue: 'fa-envelope', content: 'augusto.seabra@fiap.com.br' })
footerItemGenerator({ iconPrefix: 'fab', iconValue: 'fa-github', href: 'https://github.com/skti-dev', content: 'skti-dev' })
footerItemGenerator({ iconPrefix: 'far', iconValue: 'fa-copyright', content: 'Todos direitos reservados' })
