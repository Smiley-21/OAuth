
import {posts} from '../data';
import Card from '../components/Card';
const Home=()=>{


    return (

        <div className="home">
            {posts.map(p=>(
                <Card  
                key={p.id}
                 post={p}
                 
                 />
            ))}
        </div>
    )
}

export default Home;