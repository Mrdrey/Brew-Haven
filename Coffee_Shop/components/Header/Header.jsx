import React from 'react'


const Header = () => {
   
    return (
        <>
            <div className='Header-Container'>
                <div className="Icon">
                    <img src='https://tse2.mm.bing.net/th?id=OIP.CbeyiaVOW47UTM5o1g03nQHaFj&pid=Api&P=0&h=180' className='Icon' />
                </div>
                <div className='Title'>
                    <h2>Brew Haven</h2>
                </div>
                <div className="Nav-Bar">
                    <ul className="Nav-Bar-List">
                        <li className="Nav-Bar-Item" ><a href='#'>Home</a></li>
                    </ul>
                </div>

            </div>

        </>

    )
}

export default Header