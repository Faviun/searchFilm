function Movie (props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;

//     return <div id={id} className="row movie">
//     <div className="col s12">
//       <div className="card">
//         <div className="card-image">
//           {
//             poster === 'N/A' ? 
//                 <img src={`https://placehold.co/600x400?text=${title}`} />
//                 :
//                 <img src={poster} />

//           }
          
          
//           <span className="card-title">{title}</span>
//         </div>
//         <div className="card-content">
//           <p>{type}</p>
//           <p className="right">{year}</p>
//         </div>
//       </div>
//     </div>
//   </div>
    return <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        {
            poster === 'N/A' ? 
                <img className="activator" src={`https://placehold.co/600x400?text=${title}`} />
                :
                <img className="activator" src={poster} />
          }
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{title}</span>
        <p>{type}</p>
        <p className="right">{year}</p>
      </div>
    </div>
}

export {Movie}