import css from './containers.module.scss';

export const Section = (props) => {
    const {children} = props
    return (
        <section className={css.section}>
            {children}
        </section>
    )

}