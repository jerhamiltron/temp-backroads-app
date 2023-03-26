import Title from './Title';
import { ToursData } from './data';

const Tours = () => {
   return (
      <section className="section" id="tours">
         <Title title="featured" subtitle="tours" />

         <div className="section-center featured-center">
            {ToursData.map((tour) => {
               const {
                  id,
                  icon,
                  title,
                  text,
                  img,
                  date,
                  country,
                  duration,
                  price,
               } = tour;
               return (
                  <article className="tour-card" key={id}>
                     <div className="tour-img-container">
                        <img src={img} className="tour-img" alt="" />
                        <p className="tour-date">{date}</p>
                     </div>
                     <div className="tour-info">
                        <div className="tour-title">
                           <h4>{title}</h4>
                        </div>
                        <p>{text}</p>
                        <div className="tour-footer">
                           <p>
                              <span>
                                 <i className={icon}></i>
                              </span>{' '}
                              {country}
                           </p>
                           <p>{duration}</p>
                           <p>{price}</p>
                        </div>
                     </div>
                  </article>
               );
            })}
         </div>
      </section>
   );
};
export default Tours;
