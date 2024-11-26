import "../../../assets/styles/shop/admin/adminMenu.scss"
import {Link, useNavigate} from "react-router-dom";
const SellerMenu = (props) => {


    return (<nav className="adminMenu">
            <ul className="menu">
                <Link to="/seller/item/new">
                <li className="menu-item">상품 등록</li>
                </Link>

                <Link to="/seller/qna">
                <li className="menu-item">문의 답변</li>
                </Link>

                <li className="menu-item">-</li>
                <li className="menu-item">-</li>
                <li className="menu-item">-</li>
                <li className="menu-item">-</li>

            </ul>
        </nav>
    )
}

export default SellerMenu