import {useRef, useEffect, ReactChild, RefObject} from "react";
import { createPortal } from "react-dom";
import useMountTransition from "../../hooks/useMountTransition";
import styled, { css } from "styled-components";
import { createPortalRoot } from "../../helpers/constants";

interface IDrawerProps {
    isOpen: boolean,
    children: ReactChild,
    onClose: () => void
}

const Drawer = ({isOpen, children, onClose}: IDrawerProps) => {
    const bodyRef: RefObject<HTMLBodyElement | undefined> = useRef(document.querySelector("body"));
    const portalRootRef = useRef(
        document.getElementById("drawer-root") || createPortalRoot()
    );
    const isTransitioning = useMountTransition(isOpen, 300);

    useEffect(() => {
        if (!bodyRef.current) return;
        bodyRef.current.appendChild(portalRootRef.current);
        const portal = portalRootRef.current;

        return () => {
            portal.remove();
        };
    }, []);

    // useEffect(() => {
    //     const onKeyPress = (e: KeyboardEvent) => {
    //         if (e.key === "Escape") {
    //             onClose();
    //         }
    //     };
    //
    //     if (isOpen) {
    //         window.addEventListener("keyup", onKeyPress);
    //     }
    //
    //     return () => {
    //         window.removeEventListener("keyup", onKeyPress);
    //     };
    // }, [isOpen, onClose]);

    if (!isTransitioning && !isOpen) {
        return null;
    }

    return createPortal(
        <>
            <DrawerContainer
                aria-hidden={isOpen ? "false" : "true"}
                isTransitioning={isTransitioning}
                isOpen={isOpen}
            >
                <SDrawer isTransitioning={isTransitioning}
                         isOpen={isOpen} role="dialog">
                    {children}
                </SDrawer>
                <Backdrop isTransitioning={isTransitioning}
                          isOpen={isOpen} onClick={onClose} />
            </DrawerContainer>
        </>,
        portalRootRef.current
    );
};

const DrawerContainer = styled.div<{isOpen:boolean, isTransitioning: boolean}>`
  --transition-speed: 0.3s;
  
`
const SDrawer = styled.div<{isOpen: boolean, isTransitioning: boolean}>`
  background: var(--background);
  width: 70%;
  height: 100%;
  overflow: auto;
  position: fixed;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  transition: transform var(--transition-speed) ease;
  top: 0;
  right: 0;
  z-index: 1000;
   transform: ${({ isOpen, isTransitioning }) => {
     if (isOpen && isTransitioning) {
       return 'translateX(0)';
     }
     return 'translateX(100%)';
   }};
`
const Backdrop = styled.div<{isOpen: boolean, isTransitioning: boolean}>`
  visibility: hidden;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity var(--transition-speed) ease,
  visibility var(--transition-speed) ease;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  pointer-events: none;
  z-index: 0;
  ${(props) => {
    if (props.isOpen && props.isTransitioning) {
        return css`
          visibility: visible;
          opacity: 1;
          pointer-events: auto;
          z-index: 999;
        `;
    }
    return '';
  }};
  
`
export default Drawer;
