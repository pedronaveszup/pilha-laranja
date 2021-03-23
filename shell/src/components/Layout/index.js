import React, {useState} from 'react'
import './style.scss';

const Layout = () => {

  const [menuVisible, setMenuVisible] = useState(true)
  let leftOpen = menuVisible ? 'open' : 'closed';

  const toggleSidebar = () => { 
    setMenuVisible(!menuVisible)
  }

  return (
    <div id='layout'>

        <div id='left' className={leftOpen} >
            <div className='icon'
                 onClick={toggleSidebar} >
                 &equiv;
            </div>
            <div className={`sidebar ${leftOpen}`} >
                <div className='header'>
                </div>
                <ul className='content'>
                  <li>Orange Pipes</li>
                  <li>Orange Foundation</li>
                </ul>
            </div>
        </div>

        <div id='main'>
            <div className='header'>
                <h3 className={`
                    title
                    ${'left-' + leftOpen}
                `}>
                    Main header
                </h3>
            </div>
            <div className='content'>
                <h3>Main content</h3><br/>
                <p>
                  Nam accumsan eleifend metus at imperdiet. Mauris pellentesque ipsum nisi, et fringilla leo blandit sed. In tempor, leo sit amet fringilla imperdiet, ipsum enim sagittis sem, non molestie nisi purus consequat sapien. Proin at velit id elit tincidunt iaculis ac ac libero. Vivamus vitae tincidunt ex. Duis sit amet lacinia massa. Quisque lobortis tincidunt metus ut commodo. Sed euismod quam gravida condimentum commodo.
                </p><br/>
                <p>
                  Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum. Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend eleifend quam eget dictum.
                </p><br/>
                <p>
                  Sed nulla erat, lacinia sit amet dui at, cursus blandit neque. In ultricies, dui a laoreet dignissim, risus mi cursus risus, at luctus sem arcu non tortor. In hac habitasse platea dictumst. Etiam ut vulputate augue. Aenean efficitur commodo ipsum, in aliquet arcu blandit non. Praesent sed tempus dui, non eleifend nisi. Proin non finibus diam, quis finibus ante. Fusce aliquam faucibus mauris, id consequat velit ultricies at. Aliquam neque erat, fermentum non aliquam id, mattis nec justo. Nullam eget suscipit lectus.
                </p>
            </div>
        </div>

    </div>
  );
}

export default Layout