export function loggerGlobal(

    req: Request,
    res: Response,
    next: () => void

) {

    console.log(`Se ejecuto el controlador con el metodo ${req.method} en la ruta ${req.url}, a la hora de ${new Date().getHours()} : ${new Date().getMinutes()}, en la fecha ${new Date().toUTCString()}`);
    next();

}