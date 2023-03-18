import Heladeria from "./model/heladeria.model"
import { Helados } from "./model/helados.model"

(()=>{
    var heladeriaJavier = new Heladeria();
    var helados = new Helados();

    helados.entregarHelado();
})();