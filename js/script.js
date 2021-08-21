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

const cardGenerator = (imageSettings) => {
  try {
    if(!validadeObjectParam(imageSettings, { src: "", alt: "" })) throw "Parâmetro(1) imageSetting deve ser do tipo objeto no modelo { alt: '', src: '' }"

    const div = document.createElement("div")
    div.classList.add("card__item")
  
    const { alt, src } = imageSettings
  
    const img = document.createElement("img")
    img.setAttribute("src", src)
    img.setAttribute("alt", alt)
  
    div.appendChild(img)
  
    const cardsContainer = document.querySelector(".cards")
    cardsContainer.appendChild(div)
  }catch(e) {
    console.error("Não foi possivel gerar o card.")
    console.error(e)
  }
}

cardGenerator({ alt: "Logo do HTML 5", src: "./imagens/html5.png" })
cardGenerator({ alt: "Logo do CSS 3", src: "./imagens/css3.png" })
cardGenerator({ alt: "Logo do Javascript", src: "./imagens/javascript.png" })

const headerListGenerator = (linkSettings) => {
  try {
    if(!validadeObjectParam(linkSettings, { href: "", content: "" })) throw "Parâmetro(1) linkSettings deve ser do tipo objeto no modelo { href: '', content: '' }"

    const listItem = document.createElement("li")
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

const footerItemGenerator = (footerItemSettings) => {
  try {
    if(!validadeObjectParam(footerItemSettings, { iconPrefix: "", iconValue: "", content: "" })) throw "Parâmetro(1) footerItemSettings deve ser do tipo objeto no modelo { iconPrefix: '', iconValue: '', href: '', content: '' }, onde a chave 'href' é opcional"
    const paragraph = document.createElement("p")
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

    console.log(footerContainer)
  }catch(e) {
    console.error("Não foi possível gerar o item do rodapé.")
    console.error(e)
  }
}

footerItemGenerator({ iconPrefix: 'far', iconValue: 'fa-envelope', content: 'augusto.seabra@fiap.com.br' })
footerItemGenerator({ iconPrefix: 'fab', iconValue: 'fa-github', href: 'https://github.com/skti-dev', content: 'skti-dev' })
footerItemGenerator({ iconPrefix: 'far', iconValue: 'fa-copyright', content: 'Todos direitos reservados' })
