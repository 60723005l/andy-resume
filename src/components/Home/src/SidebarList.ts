import { SidebarItem } from "../interface"
import { Person, ArtTrack, Code } from '@material-ui/icons';

const SidebarList: Array<SidebarItem> = [
    {
        icon: Person,
        title: "About",
        action: (history) =>
        {
            history.push({
                pathname: '/Home',
              })
        }
    },
    {
        icon: Code,
        title: "Skill",
        action: (history) =>
        {
            history.push({
                pathname: '/Home/skill',
              })
        }
    },
    {
        icon: ArtTrack,
        title: "Project",
        action: (history) =>
        {
            history.push({
                pathname: '/Home/project',
              })
        }
    }
]

export default SidebarList