import css from './Preloader.module.scss';

const Preloader = () => {
    return (
        <div className={css.preloader}>
            <div className={css.bar}>
                <div className={css.dash}/>
            </div>
        </div>
    );
};

export default Preloader;