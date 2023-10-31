import Feature from '../../components/Feature';
import features from './../../datas/features';

import './style.css'

function Home() {
    return (
        <div className='home'>
            <div className="banner">
                <div className="container">
                    <h2>
                        No fees.<br />
                        No minimum deposit.<br />
                        High interest rates.
                    </h2>
                    <p>Open a savings account with Argent Bank today!</p>
                </div>
            </div>

            <section className="sect-features">
                {features.map((feature, idx) =>
                    <Feature
                        key={idx}
                        feature={feature}
                    />
                )}
            </section>
        </div>
    )
}

export default Home;