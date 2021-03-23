import React,{ Component} from 'react'

class Footer extends Component{
    render(){
        return (
            <div class="container-fluid pb-0 mb-0 justify-content-center text-light ">
            <footer>
                <div class="row my-5 justify-content-center py-5">
                    <div class="col-11">
                        <div class="row ">
                            <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                                <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b></b></h6>
                                <p class="mb-1"></p>
                                <p></p>
                            </div>
                        </div>
                        <div class="row ">
                            
                            <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                                <h6 class="mt-55 mt-2 text-muted bold-text"><b>Shaima SEGHIRI</b></h6><small> <span><i class="fa fa-envelope" aria-hidden="true"></i></span> shaimaseghiri@gmail.com</small>
                            </div>
                            <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                                <h6 class="text-muted bold-text"><b>Tomima Ralijaona</b></h6><small><span><i class="fa fa-envelope" aria-hidden="true"></i></span> tomimahariniaina@gmail.com</small>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        )
    } 
} 

export default Footer;