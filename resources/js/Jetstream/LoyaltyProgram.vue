<template>
<div>
    <div class="rounded-full py-3 px-6 bg-black flex items-center justify-between mb-2">
        <div class="text-white inline-flex space-x-10 items-center">
            <svg class="w-7 h-7" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
            </svg>
            <span class="font-mono font-extrabold text-xl tracking-widest"> ПРОГРАММА ЛОЯЛЬНОСТИ </span>
        </div>
        <button v-on:click="showLoyaltyProgram = !showLoyaltyProgram" class="text-white">
            <svg v-if="!showLoyaltyProgram" class="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
            </svg>
            <svg v-if="showLoyaltyProgram" class="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,13H5V11H19V13Z" />
            </svg>
        </button>
    </div>
    <transition name="fade">
        <div class="px-20 bg-white grid grid-cols-1" v-show="showLoyaltyProgram">
            <span class="mb-4 p-4">
                Все 7 предложений по программе лояльности предоставляются на ваш выбор
                и не суммируются! <br><br>Заключив договор с нами вы получаете доступ к
                внушительному ассортименту товара, сертификаты на все позиции, все
                сопроводительные документы при отгрузке, удобные варианты оплаты
                наличными, чек, б/н, на ваш выбор и скидка 3% на весь ассортимент из
                прайса компании.
            </span>
            <div class="py-3 bg-white flex items-center justify-between border-t-2 border-black">
                <div class="text-black inline-flex space-x-10 items-center">
                    <img class="ml-0.5" src="images/LoyaltyIcons/SalesForOrderFromSite.png" />
                    <span class=""> Cкидка при оформлении заказа через сайт</span>
                </div>
                <button v-on:click="showSaleOrderFromSite = !showSaleOrderFromSite" class="text-black">
                    <svg v-if="!showSaleOrderFromSite" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <svg v-if="showSaleOrderFromSite" class="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                    </svg>
                </button>
            </div>
            <div v-show="showSaleOrderFromSite && showLoyaltyProgram" class="flex pl-20 mb-8">
                <div class="flex flex-wrap justify-center">
                    <span>
                        При оформлении заказа через сайт вам предоставляется скидка в
                        размере 3% Действует при заказе на сумму от 2000 р.
                    </span>
                </div>
            </div>
            <div class="py-3 bg-white flex items-center justify-between border-t-2 border-black">
                <div class="text-black inline-flex space-x-11 items-center">
                    <img src="images/LoyaltyIcons/Wholesale_Trade.png" />
                    <span class=""> Оптовая скидка </span>
                </div>
                <button v-on:click="showWholesaleTrade = !showWholesaleTrade" class="text-black">
                    <svg v-if="!showWholesaleTrade" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <svg v-if="showWholesaleTrade" class="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                    </svg>
                </button>
            </div>
            <div v-show="showLoyaltyProgram && showWholesaleTrade" class="flex pl-20 mb-8">
                <div class="flex flex-wrap justify-center">
                    <span>
                        При покупке одного вида товара ящ./уп. вам предоставляется скидка
                        на данный товар в размере от 5 до 12% по следующим группам товара:
                    </span>
                    <div class="flex flex-col items-start mr-auto">
                        <span>- Бумажная профессиональная продукция</span>
                        <span>- Пластиковые контейнеры</span>
                        <span>- Бумажная упаковка</span>
                        <span>- Профессиональная и бытовая химия</span>
                        <span>- Пакеты для мусора</span>
                        <span>- Кухонные принадлежности</span>
                        <span>- Барная группа</span>
                    </div>
                </div>
            </div>
            <div class="py-3 bg-white flex items-center justify-between border-t-2 border-black">
                <div class="text-black inline-flex space-x-11 items-center">
                    <img src="images/LoyaltyIcons/SaleForGroupOfItems.png" />
                    <span class=""> Скидка на группу товаров </span>
                </div>
                <button v-on:click="showSaleGroupOfItems = !showSaleGroupOfItems" class="text-black">
                    <svg v-if="!showSaleGroupOfItems" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <svg v-if="showSaleGroupOfItems" class="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                    </svg>
                </button>
            </div>
            <div v-show="showSaleGroupOfItems && showLoyaltyProgram" class="flex pl-20 mb-8">
                <div class="flex flex-wrap justify-center">
                    <span>
                        При покупке 70% товара из предлагаемого списка, определенной
                        группы продукции, по направлению вашей деятельности, вам
                        предоставляется скидка в размере 5% на всю сумму заказа
                    </span>
                </div>
            </div>
            <div class="py-3 bg-white flex items-center justify-between border-t-2 border-black">
                <div class="text-black inline-flex space-x-12 items-center">
                    <img class="ml-2.5" src="images/LoyaltyIcons/Startap.png" />
                    <span class=""> Предложение для стартапов </span>
                </div>
                <button v-on:click="showStartap = !showStartap" class="text-black">
                    <svg v-if="!showStartap" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <svg v-if="showStartap" class="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                    </svg>
                </button>
            </div>
            <div v-show="showStartap && showLoyaltyProgram" class="flex pl-20 mb-8">
                <div class="flex flex-wrap justify-center">
                    <span>
                        Вы недавно вступили в ряды бизнесменов? Вы только что открыли
                        новое заведение или предприятие? Или находитесь в стадии открытия?
                        Поздравляем Вас! Мы как никто знаем и понимаем, как не легко
                        открыть и развить свое дело. Мы готовы предложить Вам дружескую
                        руку помощи, посодействовать в этом нелегком деле, предложив Вам
                        полное закрытие ваших потребностей по обеспечению чистоты и
                        упаковке с 10% скидкой . Данная программа лояльности действует при
                        условии:
                    </span>
                    <div class="flex flex-col items-start mr-auto">
                        <span>- при условии полного сотрудничества с нами. (полноценного
                            сотрудничества)</span>
                        <span>- действует при приобретении у нас, всего необходимого вам
                            ассортимента.
                        </span>
                        <span>(приобретения у нас всего необходимого ассортимента)</span>
                        <span>- распространяется на заведения,предприятия до года. (если вы
                            работаете, меньше одного года.)</span>
                        <span>- предоставляется сроком на 6 месяцев, с момента заключения
                            договора.</span>
                        <span>- (заключения договора, срок действия программы лояльности 6
                            мес.)</span>
                        <span>- действует вне зависимости от суммы покупки.</span>
                        <span>(полноценного сотрудничества, программа лояльности действует
                            вне зависимости от суммы покупки.)</span>
                    </div>
                </div>
            </div>
            <div class="py-3 bg-white flex items-center justify-between border-t-2 border-black">
                <div class="text-black inline-flex space-x-10 items-center">
                    <img src="images/LoyaltyIcons/MoreCostMoreSale.png" />
                    <span class=""> Чем больше сумма, тем выше скидка </span>
                </div>
                <button v-on:click="showMoreCostMoreSale = !showMoreCostMoreSale" class="text-black">
                    <svg v-if="!showMoreCostMoreSale" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <svg v-if="showMoreCostMoreSale" class="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                    </svg>
                </button>
            </div>
            <div v-show="showMoreCostMoreSale && showLoyaltyProgram" class="flex pl-20 mb-8">
                <div class="flex flex-wrap justify-center">
                    <div class="flex flex-col items-start mr-auto">
                        <span> При покупке товара в ассортименте на суммы: </span>
                        <span> от 2000р скидка 1% </span>
                        <span> от 3000р скидка 2% </span><span> от 4000р скидка 3% </span>
                        <span> от 5000р скидка 4% </span><span> от 6000р скидка 5% </span>
                        <span> от 7000р скидка 6% </span><span> от 8000р скидка 7% </span>
                        <span> от 9000р скидка 8% </span><span> от 10000р скидка 9% </span><span> от 11000р скидка 10% </span>
                    </div>
                </div>
            </div>
            <div class="py-3 bg-white flex items-center justify-between border-t-2 border-black">
                <div class="text-black inline-flex space-x-10 items-center">
                    <img class="ml-0.5" src="images/LoyaltyIcons/GiftsEveryday.png" />
                    <span class=""> Подарки каждый день </span>
                </div>
                <button v-on:click="showGiftEveryDay = !showGiftEveryDay" class="text-black">
                    <svg v-if="!showGiftEveryDay" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <svg v-if="showGiftEveryDay" class="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                    </svg>
                </button>
            </div>
            <div v-show="showGiftEveryDay && showLoyaltyProgram" class="flex pl-20 mb-8">
                <div class="flex flex-wrap justify-center">
                    <div class="flex flex-col items-start mr-auto">
                        <span>
                            При оплате заказа по факту, на сумму от 3000 р каждый день
                            определенный товар в подарок:
                        </span>
                        <span> Понедельник - Белизна 4 л. </span>
                        <span>
                            Вторник - Салфетка влаговпитывающая + Губка кухонная по 1 упк. </span><span> Среда - Салфетка барная Баттерфлай 2 упк. </span>
                        <span> Четверг - Мешки для мусора 160л.+ 60л. по 1 р. </span><span> Пятница - Жидкое мыло MARAFET 5 л. </span>
                    </div>
                </div>
            </div>
            <div class="py-3 bg-white flex items-center justify-between border-t-2 border-black">
                <div class="text-black inline-flex space-x-10 items-center">
                    <img src="images/LoyaltyIcons/networkBusiness.png" />
                    <span class=""> Предложение для сетевого бизнеса </span>
                </div>
                <button v-on:click="showNetworkBusiness = !showNetworkBusiness" class="text-black">
                    <svg v-if="!showNetworkBusiness" class="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    <svg v-if="showNetworkBusiness" class="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H5V11H19V13Z" />
                    </svg>
                </button>
            </div>
            <div v-show="showNetworkBusiness && showLoyaltyProgram" class="flex pl-20 mb-8">
                <div class="flex flex-wrap justify-center">
                    <span>
                        Вы - владелец нескольких организаций? Или под вашим брендом
                        открыто более 3 точек? Тогда у нас есть выгодное предложение —
                        скидка 8% на весь ассортимент. Основное условие предоставления
                        скидки - полное сотрудничество с компанией Белый Парус. Скидка
                        предоставляется сроком на 12 месяцев с момента заключения
                        договора. Ассортимент поставляемой продукции определяется
                        индивидуально с учётом ваших потребностей и пожеланий ваших
                        клиентов
                    </span>
                </div>
            </div>
        </div>
    </transition>
</div>
</template>

<script>
import JetApplicationLogo from "@/Jetstream/ApplicationLogo";
import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

export default {
    components: {
        JetApplicationLogo,
        simplebar,
    },
    data() {
        return {
            showLoyaltyProgram: false,
            showSaleOrderFromSite: false,
            showWholesaleTrade: false,
            showSaleGroupOfItems: false,
            showStartap: false,
            showMoreCostMoreSale: false,
            showGiftEveryDay: false,
            showNetworkBusiness: false,
        };
    },
};
</script>
