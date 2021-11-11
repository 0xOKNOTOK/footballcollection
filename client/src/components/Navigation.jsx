import React, { useState } from 'react'
import useDarkMode from '../hooks/useDarkMode'
import ThemeToggle from './ThemeToggle'

const Navigation = ({ handleSearchClick }) => {
  const [colorMode, setColorMode] = useDarkMode()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <nav class=' bg-gray-200 shadow dark:bg-gray-800'>
      <div class='container px-5 py-6 mx-auto md:flex'>
        <div class='flex items-center justify-between'>
          <div>
            <a
              class='text-2xl font-bold text-gray-800  dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300'
              href='/'
            >
              <svg
                width='70'
                height='70'
                viewBox='0 0 1080 1080'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M396.722 383.069C487.441 344.711 628.832 344.541 688.188 349.251C736.933 349.565 775.015 350.753 918.614 374.03C950.819 379.25 876.118 498.711 836.053 651.179C810.822 598.918 804.798 640.445 748.429 632.504C737.232 672.002 708.881 674.658 696.106 671.049C575.939 665.465 534.37 736.617 528.606 772.892C480.981 799.629 423.007 744.569 399.974 713.697C474.549 757.182 516.504 670.862 528.159 622.267C381.738 732.965 277.258 679.789 243.321 639.364C264.513 659.506 288.071 660.779 297.201 658.897C283.662 648.05 267.457 616.005 261.046 601.339C336.136 725.312 467.685 641.63 524.073 584.293C510.85 548.343 434.019 557.225 397.256 566.16L440.286 624.569C395.622 624.197 324.532 570.585 294.57 543.826C294.096 554.022 318.492 586.092 330.75 600.853C267.143 561.71 209.929 453.681 230.308 461.546C250.688 469.412 342.399 441.743 357.076 434.975C368.817 429.56 388.399 398.115 396.722 383.069Z'
                  fill='#030303'
                />
                <path
                  d='M419.788 369.781C507.146 306.36 887.444 377.94 914 384.5C916.301 428.351 880.688 508.845 869.5 525.5C843.367 501.276 727.719 477.493 667.749 469.558C723.772 547.156 710.523 595.471 696.896 609.929C525.364 634.98 522.104 728.039 507.872 736.433C496.486 743.147 470.7 726.716 459.231 717.661C596.688 599.253 628.719 537.513 640.237 508.619C627.218 529.188 596.577 557.282 538.458 536.52C463.045 509.579 391.684 525.26 365.431 536.468L416.926 596.918C329.059 578.167 256.17 499.134 233.301 464.219C224.827 451.28 238.734 451.11 254.192 450.594C291.954 449.333 342.534 434.982 370.758 421.831L419.788 369.781Z'
                  fill='#ED0B0C'
                />
                <path
                  d='M914 384.5L925.984 383.871L925.517 374.985L916.878 372.85L914 384.5ZM419.788 369.781L412.738 360.07L411.826 360.732L411.053 361.553L419.788 369.781ZM370.758 421.831L375.826 432.708L377.914 431.735L379.493 430.059L370.758 421.831ZM254.192 450.594L254.592 462.587L254.592 462.587L254.192 450.594ZM233.301 464.219L243.34 457.644L243.34 457.644L233.301 464.219ZM416.926 596.918L414.422 608.654L448.967 616.026L426.061 589.136L416.926 596.918ZM365.431 536.468L360.719 525.432L345.72 531.835L356.296 544.25L365.431 536.468ZM538.458 536.52L534.421 547.82L534.421 547.82L538.458 536.52ZM646.45 492.536L657.268 497.729L657.268 497.729L646.45 492.536ZM459.231 717.661L451.399 708.569L440.376 718.064L451.795 727.079L459.231 717.661ZM507.872 736.433L513.967 746.769L513.967 746.769L507.872 736.433ZM696.896 609.929L698.631 621.803L702.764 621.199L705.629 618.159L696.896 609.929ZM667.749 469.558L669.323 457.661L641.723 454.009L658.02 476.582L667.749 469.558ZM869.5 525.5L861.342 534.301L871.635 543.841L879.461 532.192L869.5 525.5ZM916.878 372.85C902.914 369.4 800.613 349.785 690.873 338.955C635.964 333.537 578.771 330.273 529.606 332.414C505.025 333.484 482.167 335.916 462.461 340.211C442.915 344.47 425.58 350.747 412.738 360.07L426.838 379.491C435.835 372.959 449.494 367.6 467.571 363.66C485.487 359.756 506.88 357.426 530.65 356.391C578.191 354.321 634.112 357.471 688.517 362.839C797.405 373.585 898.53 393.039 911.122 396.15L916.878 372.85ZM411.053 361.553L362.023 413.603L379.493 430.059L428.523 378.009L411.053 361.553ZM365.69 410.953C338.657 423.55 289.661 437.403 253.792 438.6L254.592 462.587C294.246 461.264 346.411 446.414 375.826 432.708L365.69 410.953ZM223.263 470.793C235.407 489.335 260.177 518.709 293.1 545.885C326.006 573.046 367.926 598.731 414.422 608.654L419.431 585.182C378.06 576.354 339.601 553.147 308.378 527.375C277.172 501.617 254.064 474.018 243.34 457.644L223.263 470.793ZM426.061 589.136L374.565 528.686L356.296 544.25L407.791 604.7L426.061 589.136ZM370.142 547.504C394.172 537.246 462.374 522.082 534.421 547.82L542.495 525.219C463.715 497.076 389.196 513.274 360.719 525.432L370.142 547.504ZM534.421 547.82C565.89 559.062 591.224 557.455 610.933 549.121C630.372 540.901 642.984 526.716 650.376 515.037L630.097 502.202C624.47 511.092 615.252 521.238 601.586 527.016C588.191 532.68 569.145 534.739 542.495 525.219L534.421 547.82ZM650.376 515.037C654.948 507.814 657.804 501.113 659.096 496.635C659.417 495.524 659.737 494.222 659.909 492.906C659.989 492.291 660.098 491.234 660.017 489.989C659.976 489.365 659.868 488.348 659.514 487.159C659.191 486.073 658.406 483.96 656.456 482.001C654.167 479.702 650.956 478.332 647.495 478.438C644.532 478.529 642.388 479.668 641.346 480.324C639.356 481.579 638.184 483.13 637.827 483.606C636.857 484.898 636.126 486.313 635.632 487.343L657.268 497.729C657.565 497.111 657.487 497.393 657.021 498.013C656.916 498.153 655.959 499.484 654.145 500.627C653.192 501.228 651.127 502.338 648.232 502.427C644.841 502.531 641.69 501.185 639.45 498.936C637.549 497.027 636.804 494.989 636.511 494.004C636.187 492.915 636.098 492.023 636.067 491.547C636.006 490.6 636.093 489.936 636.11 489.803C636.156 489.45 636.185 489.468 636.037 489.98C635.456 491.994 633.623 496.631 630.097 502.202L650.376 515.037ZM635.632 487.343C634.502 489.697 633.49 492.428 632.549 494.994C631.549 497.722 630.481 500.686 629.09 504.176L651.384 513.063C652.927 509.19 654.128 505.859 655.082 503.258C656.094 500.496 656.722 498.866 657.268 497.729L635.632 487.343ZM629.09 504.176C618.546 530.625 588.037 590.867 451.399 708.569L467.063 726.753C605.339 607.64 638.891 544.401 651.384 513.063L629.09 504.176ZM451.795 727.079C458.012 731.988 468.101 738.912 478.452 743.808C483.607 746.247 489.34 748.429 495.004 749.425C500.465 750.384 507.578 750.537 513.967 746.769L501.776 726.096C502.472 725.686 502.093 726.303 499.158 725.787C496.427 725.307 492.861 724.074 488.714 722.113C480.458 718.208 471.919 712.389 466.667 708.242L451.795 727.079ZM513.967 746.769C516.806 745.095 518.785 742.827 520.112 741.029C521.482 739.171 522.656 737.12 523.666 735.2C525.553 731.612 527.871 726.46 530.089 721.88C534.851 712.05 541.405 699.915 552.424 687.334C574.225 662.44 615.11 634.001 698.631 621.803L695.162 598.055C607.15 610.909 560.639 641.525 534.369 671.522C521.352 686.385 513.703 700.655 508.49 711.417C505.721 717.133 504.109 720.824 502.424 724.029C501.647 725.506 501.124 726.34 500.799 726.78C500.431 727.279 500.716 726.721 501.776 726.096L513.967 746.769ZM705.629 618.159C725.129 597.47 734.899 542.067 677.478 462.533L658.02 476.582C712.644 552.244 695.918 593.472 688.164 601.698L705.629 618.159ZM666.175 481.454C695.735 485.366 739.188 493.212 778.39 503.059C797.997 507.984 816.311 513.352 831.194 518.9C846.553 524.625 856.69 529.988 861.342 534.301L877.658 516.699C869.244 508.9 855.125 502.206 839.576 496.411C823.551 490.438 804.304 484.823 784.237 479.782C744.089 469.698 699.733 461.685 669.323 457.661L666.175 481.454ZM902.017 385.129C903.03 404.437 895.502 433.53 885.524 461.117C875.608 488.532 864.304 511.716 859.539 518.808L879.461 532.192C885.885 522.629 897.981 497.239 908.093 469.28C918.143 441.494 927.272 408.415 925.984 383.871L902.017 385.129ZM253.792 438.6C250.073 438.725 245.918 438.841 242.176 439.166C238.597 439.477 234.223 440.057 230.349 441.592C226.422 443.149 220.499 446.793 219.031 454.443C217.768 461.032 220.693 466.87 223.263 470.793L243.34 457.644C242.657 456.601 242.524 456.169 242.554 456.261C242.592 456.38 242.901 457.404 242.602 458.964C241.842 462.928 238.772 464.071 239.194 463.903C239.67 463.714 241.142 463.346 244.253 463.076C247.201 462.82 250.582 462.721 254.592 462.587L253.792 438.6Z'
                  fill='#ED0B0C'
                />
                <path
                  d='M623.864 404.958C570.385 344.259 433.969 408.52 372.445 448.239C491.412 514.069 530.95 445.136 547.805 415.371C561.29 391.558 604.13 398.507 623.864 404.958Z'
                  fill='black'
                />
                <path
                  d='M372.445 448.239L369.462 443.618L361.742 448.602L369.783 453.051L372.445 448.239ZM623.864 404.958L622.156 410.186L641.32 416.45L627.991 401.322L623.864 404.958ZM547.805 415.371L552.591 418.081L552.591 418.081L547.805 415.371ZM375.429 452.86C405.888 433.196 454.859 407.491 502.641 394.242C526.535 387.616 549.815 384.195 570.184 386.006C590.48 387.81 607.551 394.762 619.738 408.594L627.991 401.322C613.438 384.804 593.402 377.026 571.157 375.049C548.984 373.078 524.288 376.824 499.702 383.642C450.526 397.278 400.526 423.564 369.462 443.618L375.429 452.86ZM625.573 399.73C615.288 396.368 598.996 392.861 583.331 393.318C567.938 393.766 551.238 398.148 543.02 412.661L552.591 418.081C557.857 408.781 569.319 404.731 583.651 404.313C597.711 403.904 612.706 407.097 622.156 410.186L625.573 399.73ZM543.02 412.661C534.547 427.623 521.177 450.785 496.062 462.683C471.353 474.388 433.668 475.83 375.108 443.426L369.783 453.051C430.189 486.477 471.757 486.368 500.772 472.624C529.382 459.07 544.209 432.884 552.591 418.081L543.02 412.661Z'
                  fill='black'
                />
                <path
                  d='M267.855 461.219C272.709 457.574 289.205 463.825 296.846 467.406C295.076 505.499 334.958 494.986 318.848 498.001C302.737 501.016 261.787 465.777 267.855 461.219Z'
                  fill='black'
                  stroke='black'
                  stroke-width='5'
                  stroke-linecap='square'
                />
                <path
                  d='M748.22 386.55L777.832 390.823L781.338 412.62L759.326 414.331L748.22 386.55Z'
                  fill='black'
                />
                <path
                  d='M797.493 448.44L827.106 452.712L830.611 474.51L808.6 476.221L797.493 448.44Z'
                  fill='black'
                />
                <path
                  d='M686.897 400.729L716.509 405.001L720.015 426.799L698.003 428.51L686.897 400.729Z'
                  fill='black'
                />
                <path
                  d='M817.594 382.324L847.207 386.597L850.712 408.395L828.701 410.106L817.594 382.324Z'
                  fill='black'
                />
              </svg>
            </a>
          </div>

          <div class='flex md:hidden'>
            <button
              type='button'
              onClick={() => setCollapsed(collapsed ? false : 'collapsed')}
              class=' text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
              aria-label='toggle menu'
            >
              <svg viewBox='0 0 24 24' class='w-6 h-6 fill-current'>
                <path
                  fill-rule='evenodd'
                  d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div class='w-full md:flex md:items-center md:justify-between'>
          <div class='flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0'>
            <a
              href='/fixtures'
              class='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-700 hover:text-gray-100 md:mx-2'
            >
              Fixtures
            </a>

            <a
              href='/players'
              class='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-700 hover:text-gray-100 md:mx-2'
            >
              Players
            </a>
            <a
              href='/stats'
              class='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-700 hover:text-gray-100 md:mx-2'
            >
              Statistics
            </a>
            <a
              href='/contact'
              class='px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-700 hover:text-gray-100 md:mx-2'
            >
              Contact
            </a>
          </div>

          <div class='relative'>
            <span class='absolute inset-y-0 left-0 flex items-center pl-3'>
              <svg
                class='w-5 h-5 text-gray-400'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
            </span>

            <input
              onChange={handleSearchClick}
              type='text'
              class='w-full py-2 pl-10 pr-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-grey-500 dark:focus:border-red-500 focus:outline-none focus:ring'
              placeholder='Search'
            />
          </div>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default Navigation
