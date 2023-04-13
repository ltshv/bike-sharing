import css from './container.module.scss';

export const Container = (props) => {
    const {children} = props
    return (
        <div className={css.container}>
            {children}
        </div>
    )

}