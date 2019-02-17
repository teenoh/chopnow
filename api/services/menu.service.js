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
    getAMenu: (id) => {
        const menu = dummyData.menus.find(menu => menu.id == id)
        return menu || {}

    },
    updateAMenu: (id, updatedmenu) => {
        const oldmenuIndex = dummyData.menus.findIndex(menu => menu.id == id)
        const oldmenu = dummyData.menus[oldmenuIndex]
        const newmenu = { ...oldmenu, ...updatedmenu, id: parseInt(id) }

        dummyData.menus[oldmenuIndex] = newmenu

        return newmenu
    },
    deleteAMenu: (id) => {
        dummyData.menus = dummyData.menus.filter(menu => menu.id != id)
        return
    }
}

export default MenuService