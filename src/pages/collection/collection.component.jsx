import React, { useContext } from "react";
// import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import CollectionContext from "../../contexts/collections/collections.context";

// import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

// Type 1: Using Context as an componnet
// const CollectionPage = ({ match }) => {
//   return (
//     <CollectionContext.Consumer>
//       {collections => {
//         console.log("Page" ,collections);
//         const collection = collections[match.params.collectionId];
//         const { title, items } = collection;
//         return (
//           <div className="collection-page">
//             <h2 className="title">{title}</h2>
//             <div className="items">
//               {items.map(item => (
//                 <CollectionItem key={item.id} item={item} />
//               ))}
//             </div>
//           </div>
//         );
//       }}
//     </CollectionContext.Consumer>
//   );
// };

// Type 2 : Using context and hooks together.
const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionContext);
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// Type 3 : Using Redux.
// const CollectionPage = ({ collection }) => {
//   const { title, items } = collection;
//   return (
//     <div className='collection-page'>
//       <h2 className='title'>{title}</h2>
//       <div className='items'>
//         {items.map(item => (
//           <CollectionItem key={item.id} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// For Type 3
// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state)
// });
// export default connect(mapStateToProps)(CollectionPage);

export default CollectionPage;
