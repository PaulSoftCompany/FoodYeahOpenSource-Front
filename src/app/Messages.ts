export class Messages{
    public static successTitle = "¡Excelente!";
    public static errorTitle = "¡Ups!, hubo un problema";
    public static warningTitle = "Advertencia";
    public static logOutTitle = "Hasta luego";
    public static logInTitle = "Bienvenido nuevamente";
    public static registerTitle = "Bienvenido";
  
    // ---- Mensajes de cantidad en carrito ---- //
    public static lessThanOneProduct = "No puedes llevar menos de un producto.";
    public static moreThanStockProduct = "Has sobrepasado el stock del producto. Si desea pedir más productos, contactenos.";
    public static errorInValidation = "El valor ingresado en cantidad no es el correcto.";
  
    // ---- Mensajes de Login forzado ---- //
    public static forcedLogin = "Para realizar un pedido debes ingresar o crear una cuenta.";
    public static clossedSession = "Tu session ha terminado, ingresa nuevamente.";
  
    // ---- Mensajes de Carrito ---- //
    public static errorAddCart = "Hubo un error al agregar un producto al carrito, intente nuevamente en unos minutos.";
    public static successAddCart = "Has agregado el producto correctamente al carrito.";
    public static errorDeleteCart = "Hubo un error al eliminar el producto del carrito, intente nuevamente en unos minutos.";
    public static successDeleteCart = "Has eliminado el producto correctamente del carrito.";
    public static errorNoItemsInCart = "No hay productos en tu carrito.";
  
    // ---- Mensajes de Perfil ---- //
    public static errorUpdateProfile = "Uno de los campos no ha sido completado de forma corrrecta.";
    public static successUpdateProfile = "Has actualizado tus datos correcamente.";
    public static errorUpdatePasswordEqual = "Las contraseñas no coinciden";
    public static errorUpdatePasswordSize = "La contraseña es menor a 6 caracteres.";
    public static successUpdatePassword = "Has actualizado tu contraseña correctamente.";
  
    // ---- Mensajes de Direcciones ---- //
    public static errorCreateAddress = "No has completado correctamente el formulario de dirección.";
    public static successCreateAddress = "Has agregado la nueva dirección.";
    public static errorUpdateAddress = "No has completado correctamente el formulario de dirección.";
    public static successUpdateAddress = "Has actualizado la dirección.";
    public static successDeleteAddress = "Has eliminado la dirección.";
  
    // ---- Mensajes de Formulario ---- //
    public static successFormContact ="Gracias por contactarnos, te estaremos enviando un correo pronto.";
    public static successFormComplaintsBook ="Has enviado el mensaje correctamente y estaremos en contacto con usted en la brevedad posible."
    public static errorForm ="Complete los campos obligatorios del formulario";
  
    // ---- Mensajes de Orden ---- //
    public static successOrderConfirmed = "Tu pedido ha sido recibido exitosamente.";
    public static errorDirectionCantBeUsed = "Has elegido una dirección a la cual no hacemos envio.";
    public static errorOrderReject = "Lo sentimos, su pedido ha sido rechazado. Intenta nuevamente en unos minutos.";
    public static errorOrderForm = "No has terminado de llenar los detalles de facturación.";
  
    // ---- Mensajes de Payment ---- //
    public static successPaymentConfirmed = "Has realizado el pago de tu pedido.";
    public static errorPaymentToken = "No se ha podido contactar con el método de pago. Intenta nuevamente en unos minutos.";
    public static errorPaymentForm = "Los campos que has completado tienen error.";
  
    // ---- Mensajes de LogOut ---- //
    public static successLogOut = "¡Esperamos regreses pronto! Te estaremos esperando con más sorpresas.";
  
    // ---- Mensajes de LogIn ---- //
    public static successLogIn = "¡Hola! Nos alegra que regreses.";
    public static errorLogIn = "Hubo un error al ingresar. Intenta nuevamente en unos minutos.";
    public static errorFormLogIn = "No has ingresado el usario o la contraséña correcta.";
  
    // ---- Mensajes de Register ---- //
    public static successRegister = "Esperamos nuestros productos te agraden.";
    public static errorPasswordValidation = "Las contraseñas no son iguales";
    public static errorFormRegister = "No has llenado los campos correctamente.";
  
    // ---- Mensaje General de Error ---- //
    public static errorGeneral = "Ha ocurrido un error. Intente nuevamente en unos minutos."
  
    // ---- Mensaje Detalle de Producto ---- //
    public static noStockProduct = "El producto no esta en stock, aun puede pedir otra de sus presentaciones.";
}