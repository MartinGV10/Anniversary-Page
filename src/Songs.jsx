import './css/Songs.css'
import glue from './assets/glue.png'
import pp from './assets/lv.png'
import val from './assets/val.jpg'
import ju from './assets/ju.png'
import uvst from './assets/uvst.png'
import six from './assets/six.jpg'
import sd from './assets/sd.png'


function Songs() {
    return (
        <>
            <div className="song-cont">
                <h1>Songs!</h1>
                <span className="divider"></span>
                <h2 className='title'>I can't stop thinking of you when I hear these!</h2>
                <div className="song-items">
                    <div className="song">
                        <img src={glue} alt="placeholder" />
                        <h2 className="s-title">Glue Song</h2>
                        <h3 className="s-artist">Beabadoobee</h3>
                        <p className="s-album">"Tangled in love, stuck by you, from the glue"</p>
                    </div>
                    <div className="song">
                        <img src={six} alt="placeholder" />
                        <h2 className="s-title">Le Pido a DIOS</h2>
                        <h3 className="s-artist">Feid</h3>
                        <p className="s-album">"Ninguna gata me ha hecho ver lo que tue me has hecho ver"</p>
                    </div>
                    <div className="song">
                        <img src={val} alt="placeholder" />
                        <h2 className="s-title">Valentine</h2>
                        <h3 className="s-artist">Laufey</h3>
                        <p className="s-album">"I blinked and suddenly I had a valentine"</p>
                    </div>
                    <div className="song">
                        <img src={sd} alt="placeholder" />
                        <h2 className="s-title">From the Start</h2>
                        <h3 className="s-artist">Laufey</h3>
                        <p className="s-album">"When I talk to you oh, Cupid walks right through and shoots an arrow through my heart"</p>
                    </div>
                    <div className="song">
                        <img src={uvst} alt="placeholder" />
                        <h2 className="s-title">Otro Atardecer</h2>
                        <h3 className="s-artist">Bad Bunny ft. The Marias</h3>
                        <p className="s-album">"Voy a volverte a besar, como aquella vez qu el sol se escondio"</p>
                    </div>
                    <div className="song">
                        <img src={ju} alt="placeholder" />
                        <h2 className="s-title">Juna</h2>
                        <h3 className="s-artist">Clairo</h3>
                        <p className="s-album">"With you, there's no pretending. You know me, you know me and I just might know you too"</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Songs