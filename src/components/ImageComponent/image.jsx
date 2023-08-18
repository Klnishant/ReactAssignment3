import { Link } from 'react-router-dom';
import './image.css'
function ViewImage({title,image,id}){
    return(
        <>
            <div id='images'>
                
                <Link to={`/image/${id}`}>
                    <div>
                        <img src={image} alt="" />
                    </div>
                </Link>
            </div>
        </>
    )
}
export default ViewImage;