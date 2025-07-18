import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
        <h3>{category}</h3>
        { 
          isLoading && (<h2>Cargando...</h2>)
        }
        

        <div className="card-grid">
        { 
            images.map((image) => (
              <GifItem key = {image.id} 
                // title={image.title}
                // url={image.url}
                {...image}
                />
            ))
        }
        </div>

        {/* <ol>
          { 
            images.map(({id, title}) => (
              <li key={id}>{title}</li>
            ))
          }

        </ol> */}
    </>
  )
}
