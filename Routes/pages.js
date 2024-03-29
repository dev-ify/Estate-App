const express = require("express")
const router= express.Router()
const body_parser=require("body-parser")
let user=require("./user")
const session=require("express-session")
let updateV2=require("./updateV2")
const app=express()
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:false}))

const sess_time=1000 * 60 * 60 * 2
sess_secret="ssh! quiet, its a \secret"
sess_name="sid"

const sess=app.use(session({
    name:sess_name,
    resave:false,
    saveUninitialized:false,
    secret:sess_secret,
    cookie:{
    maxAge:sess_time,
    sameSite:true
    }
}))

router.post("/admin/add/business",user.add_business_user)
router.get("/admin/list/resident/active",user.resident_active)
router.get("/admin/list/resident/inactive",user.resident_inactive)
router.get("/api/business/:role/:driveNo",user.get_business_drive)
router.get("/admin/download/business",user.download_business)
router.get("/resident/download/paid",user.download_resident_paid)
router.get("/business/download/paid",user.download_business_paid)
router.get("/admin/profile",user.profile)
router.get("/domestic/search/:name",user.domestic_search)
router.get("/home/dashboard",user.dashboard)
router.get("/resident/dashboard",user.resident_home)
router.post("/admin/verify",user.login)
router.get("/apartment/drives/:drive",user.apartments_search)
router.get("/admin/houses",user.house_list)
router.get("/profile/edit",user.get_profile)
router.get("/upload/file",user.import_data)

router.get("/update/resident/id",updateV2.update_resident_id)
router.get("/update/business/id",updateV2.update_business_id)
router.get("/update/occupant/id",updateV2.update_occupant)



router.get("/apartment/edit/:id",user.apartments_edit)
router.post("/resident/add/deposit",user.add_deposit)
router.get("/resident/view/deposit",user.resident_get_deposit)
router.get("/apartments/:driveNo",user.apartments)
router.get("/residents/:drive",user.residents)
router.post("/admin/user/status/payment/:id",user.user_status_payment)
router.get("/residents/search/:name",user.residents_search)
router.post("/resident/make/payment",user.make_payment_resident)
router.post("/u/change/password",user.u_password)

router.post("/admin/add/staff",user.admin_add_dom)


router.post("/admin/make/payment",user.make_payment)
router.get("/u/password/change/",user.fetch_user)
router.get("/business/search/:name",user.business_search)
router.post("/user/make/payment",user.make_payment_user)
router.post("/admin/confirm/deposit/:id",user.accept_payment_resident)
router.post("/admin/user/confirm/deposit/:id",user.accept_payment_user)
router.post("/admin/user/confirmed/:id",user.shuttle_accept_payment)
router.get("/users/:role/:status",user.user_deposit_status)
router.post("/tenant/verify",user.tenant_login )
router.get("/admin/list/resident",user.resident_list)

router.get("/admin/payment/resident/paid",user.resident_paid)
router.get('/logout',user.logout)
router.get("/user/logout",user.logout)
router.get('/api/domestic/staff',user.domestic_staff)
router.get('/api/driver',user.view_drivers)
router.post("/admin/add/apartment",user.add_apartment)

router.get("/delete/resident/:id",user.delete_resident)
router.get("/admin/delete/user/:id",user.delete_user)
router.get("/admin/shuttle/delete/:id",user.delete_user_shuttle)
router.get("/admin/business/delete/:id",user.delete_user_business)
router.get("/admin/user/update/:id",user.update_user)
router.post("/user/update",user.edit_user_user)
router.get("/admin/deposit/resident",user.resident_deposit_pending)
router.get("/admin/user/deposit/:role",user.shuttle_deposit_pending)
router.get("/admin/payment/resident/confirmed",user.resident_deposit_confirmed)
router.get("/resident/confirmed/search/:name",user.resident_confirmed_search)
router.get("/admin/business/update/:id",user.edit_business_admin)
router.get("/admin/shuttle/update/:id",user.edit_shuttle_admin)
router.get("/resident/logout",user.resident_logout)
router.post("/shuttle/update/profile",user.update_shuttle_user)
router.get("/user/shuttle/update",user.user_shuttle)
router.post("/revenue/type",user.revenue_type)
router.post("/admin/business/edit/:id",user.update_business)
router.get("/admin/payment/business/paid",user.business_paid)
router.get("/admin/revenue/payment",user.revenue_list)
router.get("/admin/list/outstanding",user.revenue_outstanding)
router.get("/admin/revenue/paid",user.revenue_paid)
router.get("/revenue/payment/download",user.revenue_download)
router.get("/admin/payment/business/confirmed",user.accept_user_payment)
router.get("/admin/payment/business/rejected",user.accept_user_payment)
router.post("/admin/status/payment/:id",user.resident_reject_confirm)
router.get("/admin/payment/resident/rejected",user.resident_deposit_rejected)
router.post("/admin/user/edit/:id",user.edit_user)//edit a user
router.post("/admin/add/user",user.add_user)//add a user
router.get("/admin/users/:role/:status",user.user_deposit_status)
router.get("/admin/users",user.user_list)
router.post("/fake",user.fake)
router.get("/admin/resident/payment/:drive",user.resident_drive_deposit)
router.post("/resident/change/p/",user.resident_password)
router.post("/shuttle/register/driver",user.add_driver)
router.get("/resident/dashboard/view/domestic",user.get_dom_staff)
router.post("/tenant/register/",user.add_tenant)
router.get("/shuttle/home",user.shuttle_home)
router.get("/business/home",user.business_home)
router.post("/tenant/register/domestic",user.add_dom)
router.get("/shuttle/view/driver",user.view_driver)
router.post("/user/add/deposit",user.shuttle_deposit)
router.get("/api/user",user.whi)
router.post("/admin/resident/edit/:id",user.edit_resident)
router.post("/resident/update/profile",user.update_resident_profile)
router.get("/admin/resident/update/:id",user.update_resident)
router.get("/resident/edit/domestic/:id",user.edit_domestic)
router.get("/shuttle/edit/driver/:id",user.edit_driver)
router.get("/business/edit/staff/:id",user.edit_business)
router.get("/business/view/staff/",user.view_business)
router.get("/get/users",user.fetch_users)
router.get("/admin/shuttle",user.get_shuttle)
router.get("/api/users/:role",user.get_users)
router.get("/admin/list/business",user.get_business)
router.post("/resident/update/domestic/:id",user.domestic_update)
router.post("/business/update/staff/:id",user.business_update)
router.post("/shuttle/update/driver/:id",user.shuttle_update)
router.get("/admin/shuttle/drivers",user.admin_drivers)
router.get("/admin/business/staffs",user.admin_staff)
router.post("/admin/add/shuttle",user.add_shuttle_user)
router.get("/shuttle/view/deposit",user.get_shuttle_deposit)
router.get("/business/view/deposit",user.get_business_deposit)
//collect random user request
router.get("/resident/list/download",user.resident_download)
router.get("/admin/view/resident/deposit",user.resident_deposit_list)
router.get("/shuttle/manager/home",user.shuttle_manager)
router.get("/user/shuttle/management",user.get_shuttle_manager)
router.get("/user/shuttle/drivers",user.shuttle_manager_drivers)
router.delete("/resident/delete/domestic/:id",user.delete_domestic)
//reporting issues to admin
router.get("/resident/occupants",user.resident_occupants)
router.get("/admin/resident/occupants",user.occupant_list)
router.post("/resident/report",user.admin_report)
router.get("/admin/edit/house/:id",user.edit_house)
router.post("/admin/update/house/:id",user.update_house)
router.get("/admin/update/:id",user.update_user)
router.post("/tenant/add/occupants",user.add_occupants)
router.delete("/resident/delete/occupant/:id",user.delete_occupant)

//deactivting
router.post("/admin/deactivate/user/:id",user.deactivate_user)

router.get("/business/manager/home",user.business_manager)
router.get("/user/business/management",user.business_management)
router.get("/user/business/staff",user.business_management_staff)


router.get("/resident/qrcodes",updateV2.createQrcode)
module.exports=router