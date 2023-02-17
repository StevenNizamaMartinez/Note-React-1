import { FaBold, FaItalic, FaHeading, FaStrikethrough, FaLink, FaQuoteRight, FaListUl, FaListOl, FaImage, FaList } from "react-icons/fa"

import { ImEmbed2 } from "react-icons/im"

const Edit = () => {
    return (
        <div className="edit">
            <div className="edit--header">
                <FaHeading />
                <FaBold />
                <FaItalic />
                <FaStrikethrough />
            </div>
            <div className="edit--link">
                <FaLink />
                <FaQuoteRight />
                <ImEmbed2 />
                <FaImage />
            </div>
            <div className="edit--list">
                <FaListUl />
                <FaListOl />
                <FaList />
            </div>
        </div>
    )
    }

export default Edit;