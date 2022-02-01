import styles from '../styles/collectionsDisplay.module.css';
import Image from 'next/image';
import Link from 'next/link';
import popart from '../public/popart.jpg';
import landscape from '../public/landscape.jpg';
import music from '../public/music.jpg';
import vivid from '../public/vivid.jpg';
import vehicles from '../public/vehicles.jpg';
import abstract from '../public/abstract.jpg';

const CollectionDisplay = () => {
    return (
        <div className={`${styles.body}`}>
            <div className={`${styles.section}`}>
                <h2>Collections</h2>
                <ul>
                    <li>
                        <div className={`${styles.figure}`}>
                            <div className={`${styles.imgContainer}`}>
                                <Image src={popart} alt='pop-art' />
                            </div>
                            <div className={`${styles.figCaption}`}>
                                <Link href='#' passHref>
                                    Pop Art
                                </Link >
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={`${styles.figure}`}>
                            <div className={`${styles.imgContainer}`}>
                                <Image src={abstract} alt='abstract' />
                            </div>
                            <div className={`${styles.figCaption}`}>
                                <Link href='#' passHref>
                                    Abstract
                                </Link >
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={`${styles.figure}`}>
                            <div className={`${styles.imgContainer}`}>
                                <Image src={vivid} alt='vivid' />
                            </div>
                            <div className={`${styles.figCaption}`}>
                                <Link href='#' passHref>
                                    Vivid
                                </Link >
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={`${styles.figure}`}>
                            <div className={`${styles.imgContainer}`}>
                                <Image src={music} alt='music' />
                            </div>
                            <div className={`${styles.figCaption}`}>
                                <Link href='#' passHref>
                                    Music
                                </Link >
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={`${styles.figure}`}>
                            <div className={`${styles.imgContainer}`}>
                                <Image src={vehicles} alt='vehicles' />
                            </div>
                            <div className={`${styles.figCaption}`}>
                                <Link href='#' passHref>
                                    Vehicles
                                </Link >
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={`${styles.figure}`}>
                            <div className={`${styles.imgContainer}`}>
                                <Image src={landscape} alt='landscape' />
                            </div>
                            <div className={`${styles.figCaption}`}>
                                <Link href='#' passHref>
                                    Landscape
                                </Link >
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CollectionDisplay;
