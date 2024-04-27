import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { IoBook, IoBookOutline, IoBookmark, IoBookmarkOutline, IoGrid, IoGridOutline, IoPaperPlane, IoPaperPlaneOutline, IoLibrary, IoLibraryOutline } from "react-icons/io5";

export const data = [
    {
        id: 1,
        icon: <GoHome />,
        hoverIcon: <GoHomeFill />,
        link: '/'
    },
    {
        id: 2,
        icon: <IoLibraryOutline />,
        hoverIcon: <IoLibrary />,
        link: '/'
    },
    {
        id: 3,
        icon: <IoBookOutline />,
        hoverIcon: <IoBook />,
        link: '/'
    },
    {
        id: 4,
        icon: <IoBookmarkOutline />,
        hoverIcon: <IoBookmark />,
        link: '/'
    },
    {
        id: 5,
        icon: <IoGridOutline />,
        hoverIcon: <IoGrid />,
        link: '/'
    },
    {
        id: 6,
        icon: <IoPaperPlaneOutline />,
        hoverIcon: <IoPaperPlane />,
        link: '/'
    },
]