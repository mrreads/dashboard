import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

interface IProps {
    'children': React.ReactNode
}

const Transition = ({ children }: IProps) => {
    const { asPath } = useRouter();
    
    const variants = {
        in: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.55,
                delay: 0.2
            }
        },
        out: {
            opacity: 0,
            x: 40,
            transition: {
                duration: 0.25
            }
        }
    };

    return (
        <AnimatePresence initial={true} mode='wait' onExitComplete={() => window.scrollTo(0, 0)}>
            <motion.div variants={variants} animate="in" initial="out" exit="out" key={asPath}>
                { children }
            </motion.div>
        </AnimatePresence>
    );  
};

export default Transition;