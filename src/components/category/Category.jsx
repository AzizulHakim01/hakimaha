import CategoryCard from "../category_cart/CategoryCard"
import "./Category.scss"

const Category = () => {
    return (
        <div className="category">
            <div className="category_item">
                <CategoryCard title={"Motorcycle"}
                    background={"/1s.png"}/>
                <CategoryCard title={"ATVs"}
                    background={"/8.png"}/>
                <CategoryCard title={"Classic"}
                    background={"/9.png"}/>
            </div>
            <div className="category_item">
                <CategoryCard title={"Computers"}
                    background={"/4.png"}/>
                <CategoryCard title={"Piano"}
                    background={"/5.png"}/>
                <CategoryCard title={"BiCycle"}
                    background={"/6.png"}/>
            </div>
            <div className="category_item">
                <CategoryCard title={"Sports"}
                    background={"/7.png"}/>
                <CategoryCard title={"Cafe Racer"}
                    background={"/2.png"}/>
                <CategoryCard title={"yacht"}
                    background={"/11.png"}/>
            </div>
            <div className="category_item">
                <CategoryCard title={"WaveRunner"}
                    background={"/12.png"}/>
                <CategoryCard title={"Real State"}
                    background={"/13.png"}/>
                <CategoryCard title={"Robotics"}
                    background={"/15.png"}/>
            </div>
        </div>
    )
}

export default Category
