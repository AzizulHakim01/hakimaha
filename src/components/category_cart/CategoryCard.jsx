import "./CategoryCard.scss"

const CategoryCard = ({background, title}) => {
  return (
    <div className="category__card" >
        <img src={background} alt="" />
        <h4>{title}</h4>
    </div>
  )
}

export default CategoryCard