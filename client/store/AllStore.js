import {makeAutoObservable} from "mobx";


export default class AllStore {
    _services = []
    _prices = []
    _chapterdocuments = []
    _documents = []
    _technologies = []

    _users = []
    _isAuth = false
    _isAdmin = false

    _sliders = []
    _news = []
    constructor() {
        makeAutoObservable(this)
    }

    setServices(services) {
        this._services = services
    }
    setPrices(prices) {
        this._prices = prices
    }
    setChapterDocuments(chapterdocuments) {
        this._chapterdocuments = chapterdocuments
    }
    setDocuments(documents) {
        this._documents = documents
    }
    setTechnologies(technologies) {
        this._technologies = technologies
    }

    setUsers(users) {
        this._users = users
    }
    setIsAuth(auth) {
        this._isAuth = auth
    }
    setIsAdmin(admin) {
        this._isAdmin = admin
    }

    setSliders(sliders) {
        this._sliders = sliders
    }
    setNews(news) {
        this._news = news
    }



    get getServices() {
        return this._services
    }
    get getPrices() {
        return this._prices
    }
    get getChapterDocuments() {
        return this._chapterdocuments
    }
    get getDocuments() {
        return this._documents
    }
    get getTechnologies() {
        return this._technologies
    }

    get getUsers() {
        return this._users
    }
    get getIsAuth() {
        return this._isAuth
    }
    get getIsAdmin() {
        return this._isAdmin
    }

    get getSliders() {
        return this._sliders
    }
    get getNews() {
        return this._news
    }


}