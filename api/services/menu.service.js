import dummyData from "../utils/dummyData"
import Menu from "../models/menu.model"

const MenuService = {
    fetchAllMenus: () => {
        return dummyData.menus.map((menu) => {
            const newMenu = new Menu();
            newMenu.id = menu.id
            newMenu.day = menu.day
            newMenu.meals = menu.meals
            newMenu.vendor_id = menu.vendor_id
            return newMenu
        })
    },
    addMenu: (menu) => {
        const menuLen = dummyData.menus.length
        const lastId = dummyData.menus[menuLen - 1].id
        const newId = lastId + 1

        menu.id = newId

        dummyData.menus.push(menu);
        return menu
    },
    
}

export default MenuService