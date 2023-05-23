//importando o icone
import products from "../../../list.json"
import {UserCircleIcon, ShoppingCartIcon} from "@heroicons/react/24/solid"
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import imagemLogo from "../../assets/imgs/logoA.jpg"
import {Carousel, initTE, } from "tw-elements";
initTE({ Carousel });
import { Menu } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'


// const products = [
//   {
//     id: 1,
//     name: 'Óleo Essencial Natural de Melaleuca 10mL',
//     Preco: 'R$70,00',
//     novoPreco: 'R$40,00',
//     imageSrc: 'https://img.freepik.com/psd-premium/maquete-de-frasco-cosmetico-de-vidro-ambar_358694-1009.jpg',
//     imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//     carrinho: true,
//     favorite: false,
//   },
//   {
//     id: 2,
//     name: 'Óleo Essencial Natural de Melaleuca 10mL',
//     Preco: 'R$80,00',
//     novoPreco: 'R$60,00',
//     imageSrc: 'https://img.freepik.com/psd-premium/maquete-de-frasco-cosmetico-de-vidro-ambar_358694-1009.jpg',
//     imageAlt: 'Óleo Essencial Natural de Melaleuca 10mL',
//     carrinho: false,
//     favorite: false,
//   },
//   {
//     id: 3,
//     name: 'Óleo Essencial Natural de Melaleuca 10mL',
//     Preco: 'R$80,00',
//     novoPreco: 'R$50,00',
//     imageSrc: 'https://img.freepik.com/psd-premium/maquete-de-frasco-cosmetico-de-vidro-ambar_358694-1009.jpg',
//     imageAlt: 'Óleo Essencial Natural de Melaleuca 10mL',
//     carrinho: false,
//     favorite: false,
//   },
//   {
//     id: 4,
//     name: 'Óleo Essencial Natural de Melaleuca 10mL',
//     Preco: 'R$100,00',
//     novoPreco: 'R$90,00',
//     imageSrc: 'https://img.freepik.com/psd-premium/maquete-de-frasco-cosmetico-de-vidro-ambar_358694-1009.jpg',
//     imageAlt: 'Óleo Essencial Natural de Melaleuca 10mL',
//     carrinho: false,
//     favorite: false,
//   },
// ]





function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
} 
  // initTE({ Dropdown, Ripple });


  const Header = () => {
    const [open, setOpen] = useState(true)


    return <div >
        <div className="flex h-5  bg-aurora-fundoBody justify-center items-center px-3  ">
             <p>20% OFF + frete grátis acima de R$99 com o cupom PRIMEIRACOMPRA</p>
        </div>
        <div className="flex h-15 bg-aurora-fundoEscuro dark:bg-aurora-100 justify-between items-center px-5">
            <img src={imagemLogo} alt="Banner" className="flex h-16"/>
            <div className="flex ">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full ">
                <UserCircleIcon className="h-7 mx-6 text-gray-100 hidden sm:block cursor-pointer"aria-hidden="true"></UserCircleIcon>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/auroraorganic/login"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Login
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/auroraorganic/cadastro"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Cadastre-se
                      </a>
                    )}
                  </Menu.Item>
                  
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <button type="button"className="rounded-md text-gray-300 hover:text-white "
            onClick={() => setOpen(true)}>
              <ShoppingCartIcon  className="h-7 text-gray-100 hidden sm:block cursor-pointer" aria-hidden="true"/>
          </button>
          <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relati  ve z-10" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" />
            </Transition.Child>
                          
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                          <button type="button"className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => setOpen(false)}>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </Transition.Child>
                      <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                        <div className="px-4 sm:px-6">
                          <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                            Cesta
                          </Dialog.Title>
                        </div>
                        <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>{product.name}</a>
                                      </h3>
                                      <p className="ml-4">{product.novoPreco}</p>
                                    </div>
                                    
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                  
                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>   
            </div>
        </div>
        <div className="flex h-8  bg-aurora-fundoEscuro justify-center items-center px-3  ">
             <a href="/auroraorganic" className="text-gray-100 text-base mx-5 sm:block"> Home </a>
            <a href="/auroraorganic/skincare" className="text-gray-100 text-base mx-5 sm:block"> SkinCare </a>
            <a href="/auroraorganic/aromaterapia" className="text-gray-100 text-base mx-5 sm:block"> Aromaterapia </a>
            <a href="/auroraorganic/blog" className="text-gray-100 text-base mx-5 sm:block"> Blog </a>
            <a href="/auroraorganic/sobre-nos" className="text-gray-100 text-base mx-5 sm:block"> Lei antes de comprar </a> 
            <ToggleTheme/>
        </div>
        
    </div>
    
    
}

export default Header;