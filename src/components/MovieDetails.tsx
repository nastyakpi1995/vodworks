import styled from "styled-components";
import React, {useState} from "react";
import Drawer from "./Drawer";

const MovieDetailsInner = ({ movie }: any) => {
    const {poster_path, title} = movie
    const [isOpen, setIsOpen] = useState(true);

    const showDrawer = () => {
        setIsOpen(true);
    };
    const onClose = () => {
        debugger
        setIsOpen(false);
    };
    return (
        <div>
            <button type="button" onClick={() => setIsOpen(!isOpen)}>
                Trigger Drawer
            </button>
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
            >
                <div className="demo-content">
                    <button type="button" onClick={() => setIsOpen(false)}>
                        Close
                    </button>
                    <p>The drawer content!</p>
                    <input type="text" />
                </div>
            </Drawer>
        </div>
    );
}




const DrawerContainer = styled.div<{isOpen: boolean}>`
  --transition-speed: 0.3s;
  
  box-shadow: ${({ isOpen }) => {
    if (isOpen) {
      return  '0 0 15px rgba(0, 0, 0, 0.5)'
    }
    return '';
  }};
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : '' }};
`
const Img = styled.img`
  width: 228.96px;
  height: 340px;
`

const SDrawer = styled.div`
  background: #fff;
  width: 30%;
  height: 100%;
  overflow: auto;
  position: fixed;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  transition: transform var(--transition-speed) ease;
  z-index: 1000;
  top: 0;
  left: 0;
  //transform: translateX(-100%);
`
// const SSidePane = styled(SidePane)`
//     background: var(--background);
// `




/*
	Only apply the box-shadow when open to prevent the shadow
  from appearing on the edge of the screen when inactive
 */


const MovieDetails = React.memo(MovieDetailsInner)

export default MovieDetails
