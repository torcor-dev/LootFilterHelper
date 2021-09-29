const helmet = <path d="M255.406 17.75C189.313 39.42 124.536 85.124 79.03 150.344c21.238 57.44 32.72 94.314 32.72 131.375 0 36.493-11.52 73.723-32.125 129.655 49.72 36.73 100.08 58.95 150.313 64.938-5.052-60.378-9.83-120.748 1.593-181.125-30.644-3.28-61.384-13.286-92.03-30.72v-71.312c80.67 42.255 158.908 41.547 242.063 0v71.313c-30.06 14.376-60.192 24.722-90.25 29.28 8.684 60.46 7.723 120.915 2.03 181.375 46.386-7.335 92.89-28.824 139.032-64.312-33.966-112.954-34.03-145.933.594-260.47C391.162 84.844 317.924 39.89 255.405 17.75zm-75.125 212c-11.16-.13-19.646 3.174-21.25 9.156-2.33 8.7 10.778 19.76 29.282 24.72 18.505 4.957 35.388 1.92 37.72-6.782 2.33-8.7-10.775-19.76-29.282-24.72-5.783-1.55-11.396-2.315-16.47-2.374zm160.69 0c-5.074.06-10.687.825-16.47 2.375-18.507 4.96-31.613 16.018-29.28 24.72 2.33 8.7 19.213 11.738 37.717 6.78 18.505-4.958 31.613-16.018 29.282-24.72-1.604-5.98-10.09-9.286-21.25-9.155z" />

const shield = <path d="M256 16c25 24 100 72 150 72v96c0 96-75 240-150 312-75-72-150-216-150-312V88c50 0 125-48 150-72z" />

const glove = <path d="M215.75 21.063c-1.306 0-2.582.045-3.813.125-1.964.127-3.778.385-5.5.718L171.47 82.5c4.257-1.103 8.72-1.688 13.31-1.688 21.424 0 39.93 12.778 48.407 31.094l39.188-67.844c-4.546-5.766-14.702-13.066-26.97-17.53-9.74-3.546-20.516-5.473-29.655-5.47zm85.72 17.53c-1.583-.03-3.07.047-4.47.188l-44.53 77.157c4.825-1.446 9.935-2.25 15.218-2.25 20.817 0 38.924 12.05 47.718 29.532l43.156-74.782c-4.125-6.924-13.916-15.663-25.78-21.532-10.44-5.163-22.204-8.138-31.313-8.312zm-162.5 29.344c-10.902.22-21.355 4.083-32.5 12.22C96.044 87.766 85.3 99.3 74.187 114.5L122 130.78l34.656-60.03c-5.398-1.782-10.563-2.693-15.5-2.813-.73-.017-1.46-.014-2.187 0zM370.312 85.5L325.5 163.156c5.325-1.817 11.015-2.844 16.938-2.844 20.334 0 38.045 11.61 46.906 28.532l36.97-64c-3.564-8.5-12.897-19.255-24.19-27.03C391.22 90.3 378.678 85.84 370.313 85.5zm-185.532 14c-19.27 0-34.718 15.448-34.718 34.75s15.45 34.75 34.72 34.75 34.687-15.445 34.687-34.75c0-19.302-15.418-34.75-34.69-34.75zM58.53 128.938C48.27 179.428 49.268 231.032 64.595 275c.186.536.372 1.06.562 1.594l.188-.22 7.125 10.22c.872 1.25 1.81 2.52 2.78 3.78-.837-41.212 10.51-89.245 37.438-143L58.53 128.94zm209.157 3.437c-19.27 0-34.687 15.416-34.687 34.72 0 19.3 15.417 34.75 34.688 34.75 19.27 0 34.718-15.446 34.718-34.75 0-19.304-15.448-34.72-34.72-34.72zm169.282 12.688l-41.783 72.375c-.048.614-.087 1.235-.156 1.843 4.283-1.206 8.784-1.874 13.44-1.874 21.296 0 39.572 13.55 46.717 32.438l36.532-63.25c-3.43-8.86-12.62-20.092-23.783-28.313-10.62-7.82-22.842-12.6-30.968-13.218zm-303.72 3.218C99.888 212.04 89.896 266.26 95.344 308.876c.133 1.044.286 2.063.437 3.094 20.05 17.924 47.18 35.918 76.25 51.717 40.17 21.83 84.096 39.88 118.064 50.125 42.028-15.246 84.304-46.497 119.156-96.468-.26.004-.52.03-.78.03-27.474 0-49.94-22.483-49.94-49.968 0-1.24.068-2.468.158-3.687-5.125 1.664-10.587 2.592-16.25 2.592-28.306 0-51.592-22.493-52.907-50.5-6.677 3.02-14.068 4.72-21.842 4.72-25.675 0-47.22-18.35-52.25-42.595-8.685 6.134-19.27 9.75-30.657 9.75-24.53 0-45.332-16.764-51.53-39.406zM342.438 179c-19.033 0-34.282 15.25-34.282 34.313 0 19.063 15.25 34.312 34.28 34.312 19.034 0 34.252-15.246 34.252-34.313 0-19.063-15.218-34.312-34.25-34.312zm66.03 57.125c-17.362 0-31.25 13.888-31.25 31.28 0 17.394 13.888 31.283 31.25 31.283 17.364 0 31.25-13.886 31.25-31.282 0-17.393-13.886-31.28-31.25-31.28zM64.907 307.25c-7.423 9.67-14.177 19.17-20.344 28.47 3.222 9.158 10.11 19.44 20.657 29.967 13.9 13.877 33.814 28.027 57.81 41.063 41.59 22.59 95.45 41.855 152.032 52.53 3.07-8.944 5.834-18.35 8.22-28.25-35.365-10.748-79.208-28.665-120.188-50.936-39.39-21.407-75.667-46.16-98.188-72.844zM32.72 354.563c-4.446 7.515-8.483 14.866-12.126 22.093 1.467 9.07 7.963 20.19 19.593 31.72 12.248 12.14 29.84 24.596 51.094 36.062 41.084 22.16 95.78 40.72 152.22 49.187h17.375c2.59-5.32 5.097-10.844 7.47-16.563-57.277-11.12-111.46-30.63-154.25-53.875-25.16-13.666-46.376-28.622-62.064-44.28-7.912-7.9-14.49-16.006-19.31-24.344zm-14.47 57.53v34.094c1.047 2.302 3.192 5.48 6.875 8.97 5.26 4.982 13.178 10.427 22.844 15.53 18.88 9.97 44.434 18.675 70.624 22.938H161c-28.807-9.095-55.546-20.318-78.594-32.75-22.413-12.09-41.336-25.303-55.375-39.22-3.173-3.145-6.107-6.326-8.78-9.56zm0 61.782v19.75h34.344c-4.66-2.048-9.133-4.183-13.344-6.406-7.93-4.19-15.012-8.627-21-13.345z" /> 

const boot = <path d="M230.313 18.22c-38.374 0-65.98 2.768-85.032 8.5-19.05 5.73-29.247 13.7-35.874 25.468-12.14 21.562-10.572 61.474-8.375 120.593 19.884-8.89 47.444-11.333 78.19-10.905 35.384.493 74.694 5.72 109.31 14.375 18.682-46.793 28.3-91.058 38-135.344.553 43.798.98 87.61-9.655 131.406 26.36 9.144 45.587 23.717 56.53 39.438 11.877-31.154 20.094-58.353 23.626-81.094 4.292-27.623 1.972-48.605-6.874-64.406-8.846-15.8-24.57-27.567-50.656-35.75-26.087-8.183-62.19-12.28-109.188-12.28zM171.97 180.53c-9.123.087-17.842.61-25.94 1.47-9.856 77.77-11.774 156.56-4.468 254.563 26.544 23.08 66.735 31.19 105.47 40.906-32.55 1.308-65.25.195-98.5-9.595 8.33 17.868 23.528 25.03 44 25.03H450.5c37.102 0 22.515-40.208 3.094-66.936-22.223-30.585-65.654-34.498-101.22-58.533l.126.22c-38.968-15.458-77.94.41-116.906 31.562 20.12-29.928 48.293-56.017 80.187-56.47 3.742-.053 7.544.276 11.376.97-3.076-8.267-5.614-16.393-7.656-24.376-33.092-22.49-73.682-16.99-118 2.5 22.384-19.514 49.346-35.1 75.438-35.625 13.233-.267 26.238 3.352 38.312 12.28-5.426-35.452-1.14-68.74 9.438-102.47-4.554-2.32-9.476-4.46-14.782-6.31l-12.375-2.126-2.717 9.656c-35.354-9.928-78.42-16.166-115.875-16.688-2.34-.032-4.674-.052-6.97-.03z" />

const bodyArmour = <path d="M162 35.75l-94.49 27.1c-12.05 6.3-23.47 23.9-31.01 46.35-6.07 18.2-9.62 38.9-10.93 58.3L136.7 112zm188 .1L375.4 112l111 55.6c-1.3-19.3-4.9-40.2-10.9-58.3-5.7-17.05-13.6-31.35-22.5-40.05-2.7-2.8-5.5-4.9-8.4-6.4zm-172.9 11.5l-25.7 77.45-92.9 46.4 14.08 53.5 88.82 44.4 94.6-15.9 94.6 15.9 88.8-44.4 14.1-53.5-92.8-46.4-25.8-77.35h-10.5l-59.3 73.95-.1 61.1h-18.1l.1-61-59.3-74.15zM78.65 247.7l22.05 83.9 146.2-43.8v-14.7l-88.4 14.7zm354.75 0l-80 40.1-88.4-14.7v14.7l146.3 43.8zm-186.5 58.7l-31.6 9.6-35.1 70.2 66.7-33.3zm18.1 0v46.5l66.9 33.4-35.2-70.3zM191.7 323l-86.4 26 25.3 96.3zm128.6.1l61.1 122.1 25.3-96.2zm-55.3 50l.1 43.2 100.7 37.8-20.4-40.8zm-18.1 0l-80.2 40.1-20.5 40.9L247 416.3zm.1 62.4l-81.6 30.6 81.6 10.2zm18.1 0v40.7l81.7-10.2z" />

const bug = <path d="M437.507 294.138l-46.303 2.675a134.099 134.099 0 0 0-20.03-93.167l31.28-40.404-12.296-50.65-16.76 4.088 10.364 42.529-23.308 30.07A134.315 134.315 0 0 0 302.21 149.9l13.342-62.762-18.077-66.223-16.696 4.605 17.01 62.18-12.276 57.724a132.664 132.664 0 0 0-29.542-2.631 27.536 27.536 0 0 0-27.06-30.297 48.946 48.946 0 0 0-30.805-22.866 28.873 28.873 0 0 1 5.015 12.058 29.316 29.316 0 0 1-57.757 10.031 48.31 48.31 0 0 0-6.774 32.584 49.14 49.14 0 0 0 1.327 6.04 27.514 27.514 0 0 0 13.083 44.696 134.455 134.455 0 0 0-17.829 31.02l-45.106-7.356-51.232-57.434L26 172.755l55.244 61.997 48.374 7.895a133.096 133.096 0 0 0-.528 65.501q1.305 5.393 3.02 10.495l-28.927 3.128-48.612-38.182-10.656 13.569 54.145 42.517 40.835-4.422a133.344 133.344 0 0 0 46.38 52.753l-16.396 50.693-3.947 51.06 17.257 1.326 3.786-49.021 14.658-45.3a133.743 133.743 0 0 0 186.646-82.478l46.551-2.697 44.33 22.618 7.841-15.37zm-152.283-104.04c8.628-12.65 27.158-15.1 41.288-5.392 14.129 9.707 18.573 27.795 9.9 40.446-8.67 12.652-27.158 15.1-41.287 5.393-14.13-9.707-18.573-27.784-9.901-40.446zm-77.312-2.512c12.695-8.165 28.776-5.77 35.916 5.328 7.14 11.098 2.632 26.727-10.063 34.892-12.695 8.164-28.776 5.77-35.916-5.328-7.14-11.099-2.643-26.727 10.063-34.892zm-5.792 179.172c-3.98 4.93-12.414 4.735-18.832-.442-6.417-5.177-8.413-13.374-4.433-18.336 3.98-4.961 12.415-4.735 18.832.442 6.418 5.177 8.402 13.407 4.433 18.336zm-.928-42.194c-16.178 3.937-32.745-7.237-37.06-24.958-4.314-17.72 5.275-35.28 21.42-39.217 16.147-3.936 32.747 7.238 37.06 24.958 4.315 17.721-5.273 35.291-21.42 39.228zm42.82 54.306c-17.872-3.645-29.812-19.09-26.663-34.514 3.15-15.423 20.18-24.958 38.052-21.312 17.872 3.645 29.812 19.09 26.663 34.514-3.15 15.423-20.18 24.958-38.052 21.323zm54.608 16.179c-8.068 1.726-15.65-1.693-16.923-7.658-1.273-5.964 4.228-12.188 12.296-13.913 8.067-1.726 15.65 1.693 16.922 7.657 1.273 5.965-4.25 12.231-12.295 13.957zm59.817-69.18c-9.707 14.119-27.827 18.52-40.446 9.826-12.62-8.693-14.992-27.18-5.274-41.288 9.718-14.107 27.827-18.519 40.446-9.825 12.62 8.693 14.98 27.18 5.274 41.287zm6.062-55.805c-6.072.734-11.79-5.317-12.781-13.504-.992-8.186 3.128-15.434 9.2-16.178 6.072-.744 11.789 5.317 12.78 13.504.993 8.186-3.127 15.412-9.2 16.178z" />

const oneHandAxe = <path xmlns="http://www.w3.org/2000/svg" d="M215.344 22.813L205.03 37.906l71.782 46.375 8.938-12.81c-15.62-23.633-44.153-40.97-70.406-48.657zm-38.47 18.843c-28.32 35.34-79.16 105.16-105.718 145.313 61.96 26.364 113.013 69.562 133.22 119.593 5.064 12.54 8.125 25.566 8.78 38.75 36.873-9.75 80.34-36.93 117.25-70.5 30.105-27.38 55.912-59.115 71.406-87.75L176.875 41.655zm240.657 155.53c-16.836 31.038-43.713 63.084-74.717 91.283-40.21 36.57-87.238 66.474-130.47 76.03-1.09 8.278-3.153 16.543-6.343 24.72-8.91 22.832-26.23 44.633-52.656 64.592 64.678 10.955 135.135-13.105 195.844-53.687 64.21-42.923 116.84-104.112 139.28-157.063l-70.937-45.875zM84.814 213.782L16.5 313.72v143.717l135.875-194.812c-18.23-18.513-41.412-35.295-67.563-48.844z" />

const oneHandSword = <path xmlns="http://www.w3.org/2000/svg" d="M491.844 22.533l-83.42 14.865L196.572 249.25c3.262 4.815 5.37 10.72 5.37 16.932 0 5.863-1.71 11.35-4.643 15.996-5.065-1.606-10.448-2.477-16.027-2.477-15.724 0-29.904 6.89-39.69 17.796l-9.112-9.113 17.237-17.237c-4.515-5.772-8.907-11.645-13.19-17.6l-19.443 19.44-13.215-13.215 21.828-21.827c-4.403-6.59-8.67-13.278-12.792-20.068l-40.802 40.803 58.314 58.314c-1.613 5.075-2.49 10.47-2.49 16.063 0 7.666 1.65 14.96 4.592 21.564l-72.14 72.14-14.56-14.56L21.013 437l14.558 14.56-8.607 8.608 27.246 27.246 8.606-8.61 14.56 14.56 24.798-24.8-14.557-14.556 72.158-72.16c6.586 2.922 13.858 4.562 21.498 4.562 5.593 0 10.988-.877 16.063-2.49l58.363 58.363L296.5 401.48c-6.797-4.127-13.486-8.395-20.068-12.793l-21.83 21.83L241.39 397.3l19.442-19.44c-5.962-4.29-11.835-8.683-17.603-13.194l-17.238 17.238-9.16-9.16c10.905-9.785 17.795-23.965 17.795-39.69 0-5.346-.806-10.51-2.285-15.39 4.703-3.04 10.288-4.817 16.265-4.816 6.21 0 11.776 1.77 16.52 4.955L476.98 105.95l14.864-83.417zm-66.227 53.012l13.215 13.215-191.684 191.68-13.214-13.213L425.617 75.545zM181.273 298.39c19.257 0 34.665 15.41 34.665 34.665 0 19.256-15.408 34.666-34.665 34.666-19.256 0-34.666-15.41-34.666-34.665s15.41-34.666 34.666-34.666z" />

const runeDagger = <path d="M57.656 16.156C42.71 16.533 31.24 29.793 24.5 44.813 6.05 85.91 32.88 81.803 71.156 90.374 79.272 66.585 86.96 48.042 94.72 31.53 87.197 27.1 79.315 22.944 71 19.126c-4.708-2.162-9.158-3.074-13.344-2.97zm52.907 25.5c-7.026 15.13-13.945 32.076-21.344 53.688 10.168 3.41 20.723 8.157 31.155 15.094 11.68-12.212 23.456-21.498 35.28-29.063-13.287-14.6-28.152-27.967-45.093-39.72zm57.28 53.97c-11.064 6.804-21.837 15.1-32.718 26.343 11.416 10.345 22.372 23.944 32.125 42.124 7.94-13.026 16.59-23.73 25.625-33.125-7.722-12.28-15.997-24.11-25.03-35.345zm104.876 6.655c-21.823 9.456-42.608 20.63-59.908 35.126-.123.117-.25.227-.375.344-13.47 12.74-25.593 27.446-36.28 48.72-2.3 5.677-4.237 11.678-5.72 18.03 21.49 66.477 64.75 126.913 119.5 172.094 33.212 37.003 79.484 67.087 129.47 89.03C300.828 433.35 196.2 335.897 155.124 217.563c-13.287 6.835-27.93 11.178-42.03 11.625 77.753 185.39 256.893 319.184 382.28 238.657-161.46-55.25-192.335-204.99-257.28-326.344 12.505-8.307 26.713-15.444 42.06-22.094l-7.436-17.125z" transform="translate(0, 0) scale(1, 1) rotate(-90, 256, 256) skewX(0) skewY(0)" />

const dagger = <path xmlns="http://www.w3.org/2000/svg" d="M38.748 473.09a20.53 20.53 0 1 0 0-29 20.46 20.46 0 0 0 0 29zm89.32-218a8.51 8.51 0 1 1 12 12 38.43 38.43 0 0 0 0 54.36l50.6 50.52a38.47 38.47 0 0 0 54.4 0 8.54 8.54 0 0 1 12-.06 8.42 8.42 0 0 1 0 12 55 55 0 0 1-39.22 16.06 54.94 54.94 0 0 1-39.22-16.08l-50.56-50.37a55.46 55.46 0 0 1 0-78.43zm314.86-196.81c8.78-8.31 36.35-25.4 36.35-25.4s-17.08 27.56-25.4 36.35c-58.39 61.66-215.17 222.6-267.3 276.06l-19.71-19.71c53.46-52.13 214.4-208.91 276.06-267.3zm-336.79 325.53c8.8-8.8 17.5-16.88 25.68-23.94l20.47 20.47c-7.07 8.19-15.14 16.88-23.94 25.68a423.48 423.48 0 0 1-41.95 37.16 36.77 36.77 0 0 0-17.33-17.54 424 424 0 0 1 37.07-41.83z" />

const claw = <path xmlns="http://www.w3.org/2000/svg" d="M280.3 30.04c-33.4 19.78-70.7 55.47-104.5 97.06-47.4 58.3-88.85 127.5-109.81 176.6l1.69 8.9 7.61-1.4.83-1.5c16.57-30.5 41.98-66 72.18-101.7 38.3-61.4 84.1-127.56 132-177.96zm113.9 2.72c-43 15.92-96.3 52.79-146.1 97.94-64.9 59-124.9 131.3-154.73 185.2l1.6 11.6 12.93-5.8c8.3-9.9 17-19.9 24.4-28 64.8-85.2 170.9-189.4 261.9-260.94zM473 81.09c-47.5 7.72-106.6 38.31-163.9 79.31-71.2 50.9-140 116.6-183.9 168.7l1.4 19.5L151 347c73.7-85.1 198.4-193.7 322-265.91zM47.34 303L18 344v144l37.32-14s50.58 17.1 72.68 17.7c31.5.8 72.7-48.2 74.7-57.7 1.6-7.9-3.8-14.7-8.8-21.4-19.9 14.2-35.1 20.7-61.8 6.5 30.6-6.1 34.2-5.7 53.6-21.9 10-9 12.3-19.8 11.5-29.5-.5-6-14.3-10.5-22.4-20.5-5.6 6.2-10 11.3-15.1 17.2l-49.7 3.4-1.9-26.5-28.48 10-2.58-22.1-23.74 4.2c-1.9-10.6-4.11-21.6-5.96-30.4z" />

const oneHandMace = <path xmlns="http://www.w3.org/2000/svg" d="M487.666 24.334c-24.62 11.186-45.546 18.608-63.14 21.9l41.24 41.24c3.292-17.594 10.714-38.52 21.9-63.14zm-86.082 24.414c-32.088 11.49-60.035 12.74-84.406 4.617l-9.674-3.222-1.998 9.996c-10.117 50.582-18.887 83.28-36.71 121.694l61.37 61.37c38.413-17.823 71.112-26.593 121.695-36.71l9.997-1.998-3.222-9.674c-8.124-24.37-6.873-52.318 4.617-84.406zm2.025 18.148c-13.847 11.685-29.848 19.95-55.34 19.95h-5.56l-2.487 4.974c-18.768 37.536-37.835 74.907-55.494 98.27 17.45-37.59 26.875-71.046 36.4-117.088 25.205 6.06 52.813 3.84 82.48-6.106zm7.902 16.276L303.65 194.957c17.364-24.354 33.734-57.204 50.276-90.32 24.903-1.193 42.88-10.125 57.586-21.465zm17.316 17.316c-11.34 14.707-20.272 32.683-21.465 57.586-33.116 16.542-65.966 32.912-90.32 50.276zm16.276 7.903c-9.945 29.667-12.166 57.275-6.106 82.48-46.042 9.525-79.5 18.95-117.088 36.4 23.363-17.658 60.734-36.725 98.27-55.493l4.974-2.488v-5.56c0-25.492 8.265-41.493 19.95-55.34zm-192.292 82.915l-12.728 12.728 67.883 67.883 12.728-12.728-7.67-7.67-52.543-52.543zm-6.363 41.718l-43.843 43.842 32.528 32.528 43.842-43.842zm-67.884 45.256l-12.728 12.728 55.154 55.154 12.73-12.728zm-14.142 36.77l-41.012 41.01 32.527 32.528 41.01-41.012zM99.37 357.474l-12.727 12.728 55.154 55.154 12.728-12.728zm-14.14 36.77L18 461.472V494h32.527l67.23-67.23z" />

const staff = <path xmlns="http://www.w3.org/2000/svg" d="M335.656 19.53c-24.51.093-48.993 5.235-71.062 15.626-22.46 10.577-43.112 34.202-58.375 62.563-15.264 28.36-25.182 61.262-27.69 88.75-7.487 82.112-51.926 155.352-159.78 252.56l-.188 21.44C89.216 403.443 139.915 346.632 176.313 290l.063.03c-9.293 32.473-22.623 63.18-43.594 87.97-31.47 35.584-69.222 71.1-114.468 106.53l-.062 8.25 25 .064h.47l1.28-1.156c24.405-16.498 48.607-31.488 72.594-41.5l.187.187-46.436 42.5 28.937.063c48.372-41.685 94.714-90.58 129.626-137 33.587-44.658 56.02-87.312 60.688-116.844-1.268-2.32-2.552-4.628-3.656-7.094-18.833-42.06-4.273-96.424 40.218-116.063 32.73-14.45 74.854-3.165 90.438 31.344.15.333.324.634.47.97 13.302 24.062 6.175 49.48-9.345 61.97-7.866 6.328-18.442 9.528-28.75 6.56-10.31-2.966-19.043-11.772-24.5-25.124l17.28-7.062c3.992 9.764 8.667 13.15 12.375 14.22 3.708 1.066 7.767.148 11.875-3.158 8.216-6.61 14.282-21.91 4.406-39.03l-.28-.47-.22-.5c-10.7-24.82-41.96-33.333-66.22-22.625-34.063 15.037-45.594 58.052-30.686 91.345 20.527 45.846 77.97 61.177 122.375 40.875 60.157-27.5 80.13-103.328 53.094-161.813-24.737-53.503-81.41-82.484-138.908-83.843-1.633-.04-3.272-.07-4.906-.063zm-25.75 26.72c3.238.035 6.363.348 9.406.906 10.343 1.898 19.946 6.753 29.032 13.25-30.623-5.437-58.324 4.612-80.78 24.782-22.44 20.152-39.16 50.59-45.783 84.718-4.655-11.358-7.166-21.462-6.686-31.72.296-6.343 1.715-12.956 4.78-20.217 9.094-18.016 21.032-33.946 35.22-46.69 7.824-7.026 16.39-13.07 25.53-17.905 10.932-5.212 20.522-7.22 29.282-7.125zm122.938 62.313c22.583 13.167 34.365 41.86 32.937 70.656-.564 11.395-3.466 22.975-8.905 33.624-12.48 18.937-35.53 25.51-49.97 20.875l-.092-.25c27.943-10.365 39.18-32.377 40.312-55.19.124-2.5.115-4.994-.03-7.468 1.447-13.31-.412-28.793-5.47-43.437-2.244-6.496-5.15-12.89-8.844-18.72l.064-.093zm-135.563 1.312c-20.97 19.342-29.406 35.252-33.25 51.25-3.848 16.023-2.788 32.84-2.905 52.875-.14 23.79-2.56 51.542-18.438 85.688-.005.012-.025.018-.03.03-21.095 26.753-45.276 52.25-68.907 67.376l-.063-.03c64.195-71.545 68.527-114.792 68.75-153.19.112-19.197-1.253-37.594 3.438-57.124.57-2.37 1.233-4.742 2-7.125h.03c8.098-17.036 16.572-26.058 25.47-31.563 7.18-4.44 15.035-6.697 23.906-8.187z" />

const warstaff = <path xmlns="http://www.w3.org/2000/svg" d="M473.79 38.21c-1.853-1.85-3.902-3.5-6.066-4.89l-5.703 10.304 2.416-12.152c-5.255-2.56-10.94-3.467-16.103-1.746l-.79.79c.696 7.73 4.943 16.09 11.396 22.544 6.453 6.454 14.814 10.7 22.545 11.396l.79-.79c2.827-8.484-1.415-18.384-8.486-25.455zm-41.087 7.145L277.92 200.14l6.71 6.71 40.306-40.306-31.498 49.112 18.423 18.424L466.645 79.297c-1.877-.724-3.712-1.558-5.5-2.488l-26.51 13.664 18.61-18.613c-2.49-1.847-4.845-3.884-7.032-6.072-5.808-5.807-10.56-12.777-13.51-20.433zm-167.51 167.512l-16.22 16.22 48.656 16.217-32.438-32.437zm20.46 47.42l-50.91-16.97-11.226 11.225 50.912 16.97 11.224-11.225zM260.2 285.743l-17.85-5.95-10.92 34.72 28.77-28.77zm-34.93-11.643l-15.98-5.328-11.88 11.88 19.628 19.63 8.232-26.182zm-6.513 53.13l-7.81-7.583-26.266-26.267L29.725 448.333c-3.395 10.185 3.4 22.4 13.044 29.324l61.006-61.006-53.14 65.167c4.35 1.522 8.86 1.847 13.03.457l155.09-155.044z" />

const quiver = <path xmlns="http://www.w3.org/2000/svg" d="M341.21 18.004l-3.04 6.248 6.585 13.173-9.588-7.005-8.31 17.076 5.96 13.107-9.99-4.824-3.554 7.3 17.35 29.683-33.874 69.606a416.538 416.538 0 0 0 18.326 3.477l31.722-65.19.04-.005 21.937-45.078-.04.006 8.346-17.153-16.184-7.875-8.338 17.133-17.348-29.682zM55.578 34.978c-.634.002-1.267.02-1.9.057-5.067.296-10.09 1.74-14.67 4.56-4.553 2.804-6.37 6.767-7.827 10.832-1.457 4.066-2.388 8.677-3.095 14.045-1.413 10.738-1.816 24.476-1.486 40.66.658 32.37 4.336 74.363 9.923 118.346 8.822 69.45 22.01 143.094 36.53 191.793l.054-.014c.545 1.88 1.134 3.9 1.77 5.962l.01.04c.362 1.148.725 2.282 1.087 3.398 1.698 5.15 3.677 10.255 5.957 13.908 1.857 2.973 3.763 4.76 5.17 5.465 1.405.703 2.444 1.013 5.48-.07 1.757-.626 1.752-.61 2.35-3.255.6-2.647.505-7.635-.522-13.617-1.064-6.19-2.98-13.38-5.028-20.86-13.193-46.49-26.532-118.342-35.002-185.017-5.53-43.537-9.145-85.127-9.783-116.443-.32-15.658.13-28.787 1.336-37.945.604-4.58 1.424-8.17 2.194-10.318.38-1.06.784-1.647.94-1.883 4.144-2.356 7.705-2.46 13.236-.394 5.81 2.17 13.136 7.287 20.948 14.655 15.623 14.735 33.2 37.99 51.013 61.012 17.813 23.023 35.792 45.84 54.308 60.533 5.98 4.747 12.075 8.698 18.43 11.374 2.59.674 5.962 1.44 9.43 1.905 3.61.482 7.23.544 9.443.148 1.64-.293 2.058-.586 2.116-.625 3.39-6.163 1.936-8.012-1.37-11.398-3.317-3.398-10.153-5.99-12.435-6.143l.03-.433c-4.388-1.84-9.276-4.82-14.453-8.928-15.74-12.492-33.554-34.564-51.26-57.45-17.705-22.884-35.368-46.557-52.9-63.09-8.766-8.268-17.5-14.873-26.996-18.42-4.154-1.554-8.585-2.4-13.022-2.388zm191.127 4.06L238.56 63.14l9.3 21.06-13.648-8.19-3.554 10.52 20.972 27.243-10.406 30.8c5.658 2.05 11.33 3.997 17.027 5.84l10.427-30.86.037-.01 16.05-47.495-.042.012 6.106-18.072-17.053-5.762-6.1 18.053-20.97-27.243zm162.064 11.94l-12.565 1.7-12.026 24.71 18.306-13.502 6.283-12.908zm-90.872 12.205L305.65 66.46l-16.045 47.495 12.248-3.278 16.045-47.494zm106.797 5.508l-8.807 12.15 2.262 28.574-9.654-18.375-13.225 18.24 11.938 32.24-21.738 29.987c7.335.094 14.8.016 22.416-.25l13.883-19.154.04.002 29.424-40.588-.04-.002 11.194-15.443-14.572-10.566-11.184 15.427-11.937-32.242zm-28.916 8.982l-13.41 3.433-8.103 16.65 12.564-1.7 8.95-18.383zm77.06 34.71l-4.803 6.625 12.77.366 4.702-6.487-12.67-.505zm-5.733 7.905l-23.69 32.68 12.668.507 6.422-8.857-6.08-3.598 9.475-1.087 10.926-15.072-9.72-4.573zm-238.152 38.83c-1.702 3.462-3.393 6.85-5.09 10.285 5.506 1.805 10.928 5.036 15.63 9.854 7.124 7.297 10.943 20.566 4.212 32.744-3.314 5.994-9.456 8.64-14.668 9.572-5.214.932-10.3.602-14.998-.025-6.17-.825-11.544-2.263-14.677-3.19-1.432 2.818-2.863 5.64-4.3 8.443 50.84 27.08 109.533 22.75 167.438 10.64 12.018-15.735 23.947-31.747 35.897-48.106-62.995.883-117.13-10.59-169.445-30.217zm-42.14 83.683c-25.922 49.92-52.78 98.18-83.245 146.836 2.912 10.984 6.645 23.148 8.578 34.405 1.223 7.123 1.856 13.942.338 20.64-1.518 6.7-6.486 13.604-13.86 16.234-6.776 2.417-13.994 2.012-19.59-.793-5.598-2.804-9.44-7.322-12.374-12.025-.223-.356-.433-.717-.647-1.078-2.342 3.425-4.683 6.85-7.072 10.287C73.4 482.04 98.747 494.51 121.21 493.98c90.72-76.612 159.746-152.114 224.65-235.01-53.372 9.265-109.005 10.413-159.044-16.17z" />

const bow = <path xmlns="http://www.w3.org/2000/svg" d="M492.656 20.406l-118.594 56.22L413.875 86l-86.97 86.97-305.5 259.374.69.687 104.75-47.467-46.376 105.843.905.906 272.5-319.875 73.22-73.218 9.342 39.81 56.22-118.624zm-473.25.063c-1.347 23.43 5 39.947 16.563 52.218l24.093 302.28 17.562-14.874-21.72-272.438c57.975 31.954 169.096 25.165 216.907 106.72l66.625-56.564 1.22-1.218C292.74 38.666 86.01 99.716 19.406 20.47zm359.531 151.56l-1.156 1.157-57.25 67.188c82.006 47.945 75.587 159.267 107.283 218.03l-272.157-24.5-14.812 17.408 301.562 27.125c12.48 12.283 29.4 19.084 53.688 17.687-79.95-67.2-18.36-275.754-117.156-324.094z" />

const wand = <path d="M339.72 55.875c-61.792 0-111.876 50.08-111.876 111.875 0 61.79 50.08 111.875 111.875 111.875 61.79 0 111.905-50.08 111.905-111.875 0-61.79-50.112-111.875-111.906-111.875zm0 18.875c51.36 0 93 41.642 93 93 0 51.362-41.643 93-93 93-51.363 0-92.97-41.642-92.97-93 0-33.034 17.208-62.033 43.156-78.53-4.767 5.728-7.656 13.088-7.656 21.124 0 18.257 14.806 33.062 33.063 33.062 18.256 0 33.062-14.805 33.062-33.062 0-17.464-13.562-31.73-30.72-32.938 7.073-1.72 14.46-2.656 22.064-2.656zm-62.533 65.03c-8.418 0-15.28 6.825-15.28 15.25 0 8.42 6.854 15.25 15.28 15.25 8.42 0 15.25-6.822 15.25-15.25 0-8.418-6.823-15.25-15.25-15.25zm-76.312 72.97c-.846 7.796-2.342 14.92-4.5 21.406l78.5 78.5c6.444-2.173 13.523-3.733 21.25-4.625l-95.25-95.28zm-13.125 39.22c-4.91 7.335-11.078 13.393-18.5 18.218l69.594 69.625c4.842-7.41 10.92-13.58 18.25-18.5L187.75 251.97zm-36.438 26.718c-6.406 2.136-13.398 3.716-20.968 4.687 32.544 31.712 62.545 62.546 95.187 95.188 1.003-7.534 2.595-14.498 4.75-20.875l-78.968-79zm-15.687 36.406L17.187 433.188v21.937l129.25-129.22-10.812-10.81zm24 24L17.187 481.53v13.595h53.72L193.28 372.75l-33.655-33.656z" />

const scepter = <path xmlns="http://www.w3.org/2000/svg" d="M377.154 21.04l4.06 50.167 54.32 2.856 2.677 54.306 50.173 3.898-7.994-102.88-103.236-8.35zM359.31 32.267L245.954 145.623l44.086 3.566 72.837-72.842-3.566-44.08zm16.696 57.38l-72.98 72.983 2.19 41.692 41.526 2.05 73.004-73.01L417.7 91.84l-41.694-2.192zm56.836 57.05l-72.457 72.46 3.433 44.213 113.24-113.237-44.216-3.436zm-196.213 16.92l7.483 92.525-43.234-43.235c-.846 7.773-2.35 14.887-4.5 21.356l78.48 78.482c6.443-2.176 13.52-3.72 21.244-4.613l-42.5-42.5 92.203 7.164-3.723-47.943-54.648-2.696-2.868-54.662-47.94-3.877zm-48.855 88.472c-4.9 7.32-11.07 13.37-18.474 18.187l69.585 69.584c4.836-7.382 10.892-13.547 18.2-18.458l-69.31-69.312zm-36.392 26.7c-6.41 2.14-13.407 3.69-20.983 4.66l29.25 29.25.34-.34 13.215 13.216-.34.34 52.697 52.697c1.007-7.542 2.585-14.51 4.75-20.894l-78.93-78.93zM135.53 315.01L17.09 433.094v22.17l129.348-129.348-10.905-10.904zm24.12 24.12L17.088 481.69V495h53.73l122.35-122.35-33.518-33.517z" />

const twoHandAxe = <path d="M240.094 19.594c-56.69.364-110.882 29.054-151.594 72.344-53.428 56.81-81.948 137.907-61.03 210.093 16.33-8.797 32.757-15.987 48.936-21.374-6.327-123.16 89.247-210.922 200.03-210.344 4.255-13.365 10.268-27.308 18.127-41.874-16.323-5.43-32.736-8.36-48.97-8.782-1.833-.047-3.67-.074-5.5-.062zM271.28 88.97C173.724 90.715 91.367 166.07 94.907 275.28c10.986-2.73 21.788-4.582 32.28-5.436 14.59-1.187 28.69-.463 41.783 2.437L278.312 162.94c-5.26-12.1-8.473-25.024-9.344-38.75-.716-11.256.14-22.983 2.592-35.22-.093.002-.187 0-.28 0zm60.845 60.718l-16.875 16.875L345.75 197l16.813-16.813-30.438-30.5zm-37.125 23L175.625 292.063l44.625 44.562 119.313-119.313L295 172.688zm189.875 46.093c-14.466 7.808-28.318 13.807-41.594 18.064.75 111.013-87.243 206.8-210.686 200.28-5.39 16.104-12.552 32.462-21.313 48.72 72.19 20.922 153.313-7.6 210.126-61.03 57.045-53.65 88.516-130.72 63.47-206.033zm-136 15.657L240.687 342.625c3.23 13.563 4.086 28.245 2.844 43.47-.862 10.58-2.752 21.476-5.53 32.56 109.585 3.718 185.128-79.008 186.594-176.905-12.342 2.506-24.16 3.403-35.5 2.688-14.287-.9-27.698-4.347-40.22-10zM169.5 312.313L20.094 461.72V494H48.75l151.188-151.188-30.438-30.5z" />

const twoHandSword = <path d="M499.78 16.125L477.157 22.5l-151.47 42.53-6.592 1.876-.22 6.844-.905 29.344-18.814 5.03-6.656 1.75-.28 6.907-.97 24.657-134.125 133.594-2.875 2.876.125 4.063c.71 20.398-14.288 31.957-22.75 31.217-9.973-.872-15.33-4.037-18.875-8.437-3.544-4.4-5.546-10.93-5.5-19.656l.125-24.156-16.344 17.78c-17.327 18.843-26.697 42.824-26.843 66.97l-.062 9.406h9.406c12.214.003 24.46 2.815 35.72 8.344l-4.063 14.468c-20.925 17.263-41.855 40.54-52.968 59.97-1.636 2.857-2.977 5.514-4.064 7.968L16.25 454.75l-1.5 41.656 41.656-1.5 9-32.187c2.383-1.07 4.96-2.36 7.72-3.94 19.338-11.062 42.48-31.857 59.718-52.686l14.47-4.063c5.345 11.147 8.143 23.224 8.186 35.064l.03 9.312h9.314c24.72.007 49.722-9.366 68.844-27.53l13.906-13.22-19-2.78c-10.576-1.556-18.374-5.412-23.03-9.75-4.66-4.34-6.335-8.744-5.876-13.626 1.054-11.204 4.174-16.044 8.437-19.063 4.263-3.018 11.267-4.52 21.094-4.218l4.06.124 2.845-2.875 136.313-136.314 18.968-.47 6.938-.186 1.844-6.688 4.437-16.093 32.906-1.44 6.75-.28 1.845-6.53L491.75 36.624l8.03-20.5zM466.157 45L429.97 173.906 397 175.312l-6.78.282-1.814 6.594-4.406 16-15.75.375-3.72.093-2.655 2.625-136.28 136.314c-9.812.1-19.142 1.668-27.064 6.812l.69-19.25 144.343-144.344 26.437-1.03L374.625 163l1.844-6.656 6.905-.188 32.25-.937 22.938-82.595-82.594 22.938L355 125.5l-.22 6.875-6.655 1.844-19.03 5.186-.876 30.344-142.25 142.22-21.19.75c4.803-7.545 7.843-16.86 8.22-27.158l134-133.437 2.625-2.594.125-3.655.875-21.47 18.875-5.03 6.72-1.813.186-6.937.938-29.438L466.156 45zM93.03 307.78c1.38 3.076 3.004 6.015 5.157 8.69 4.966 6.163 11.98 10.684 20.5 13.217l-4.343 15.5c-9.857-4.416-20.287-7.18-30.844-8.25 1.23-10.044 4.448-19.957 9.53-29.156zm87.25 23.095l-1.53 42.97-57.5 16.092 16.063-57.53 42.968-1.532zm2.657 61.22c2.006 5.516 5.43 10.576 9.875 14.717 3.934 3.665 8.684 6.685 14.032 9.094-10.278 6.204-21.67 9.998-33.188 11.28-1.086-10.328-3.84-20.554-8.125-30.248l17.407-4.844z" />

const twoHandMace = <path d="M483.424 24.638L449.83 39.98c.944.974 1.864 1.99 2.754 3.068 3.544 4.29 6.546 8.89 9.07 13.745l21.77-32.155zm-221.18 14.426l4.217 42.527c7.223-6.983 14.875-13.594 22.97-19.575l-27.186-22.95zm143.17 2.358c-2 .03-4.06.133-6.18.298-11.58.906-24.367 3.983-37.02 7.41l23.55 36.178.404.62.297.68c3.1 7.08 2.3 14.488-.006 21.41-2.308 6.924-6.405 13.565-12.487 18.53-6.082 4.962-14.756 8.037-23.813 6.118-9.056-1.92-17.6-8.213-25.506-18.803l-1.718-2.305-1.104-48.535c-25.135 12.94-47.54 34.326-66.178 57.047l17.14 9.428 2.892 1.59 1.177 3.08c4.892 12.782 5.147 26.122-1.43 37.13-6.575 11.01-18.66 18.744-35.435 24.293l-6.9 2.285-11.653-19.82c-1.71 3.762-3.41 7.56-5.093 11.43l-17.225 108.624-2.75-61.597c-10.444 24.205-21.82 48.42-36.09 70.063C119.643 368.216 28.322 462.01 28.322 462.01l-.07.072-.07.07c-3.905 3.85-3.91 5.573-3.475 7.693.29 1.418 1.348 3.368 3.168 5.43l97.166-78.713-84.007 87.3c5.778 2.305 11.906 3.587 15.895 3.495 6.885-6.482 66.713-62.5 107.11-88.644 38.117-24.67 69.79-54.084 106.32-82.045l12.213-70.723.37-2.147 1.312-1.74c6.783-8.997 15.585-14.236 24.506-15.33a31.905 31.905 0 0 1 6.588-.113c6.464.56 12.5 3.047 17.584 6.59 11.895 8.287 20.172 22.808 18.008 37.68 6.76-3 13.436-6.003 19.883-9.153 20.67-10.1 38.705-21.33 51.063-37.56-7.023-.544-13.58-3.672-19.03-7.846-7.455-5.707-13.412-13.558-17.25-22.2-3.84-8.64-5.723-18.287-2.974-27.615 2.75-9.326 11.142-17.274 22.833-20.01l.645-.153 45.662-3.797c.92-5.208 1.667-10.42 2.19-15.58 1.022-10.1 1.175-19.927.35-29.187l-28.927 31.25 19.88-64.613c-1.88-3.562-4.056-6.88-6.556-9.907-7.064-8.55-16.195-12.217-27.474-12.957a72.25 72.25 0 0 0-5.82-.134zm-65.937 5.773l1.316 57.93c5.447 6.628 10.038 9.285 13.098 9.933 3.385.717 5.85-.13 8.702-2.457 2.852-2.327 5.483-6.348 6.79-10.272 1.253-3.757 1.01-7.105.624-8.23l-30.53-46.903zm-136.057 64.69l37.62 63.984c10.068-4.252 16.137-9.108 18.94-13.802 3.017-5.05 3.41-10.74.962-18.547l-57.522-31.636zm284.063 45.76l-78.336 6.513c-6.528 1.622-8.23 3.973-9.252 7.443-1.05 3.558-.457 9.338 2.156 15.218 2.614 5.88 7.085 11.648 11.745 15.217 4.102 3.14 7.867 4.322 10.924 4.105.6-.433 1.22-.876 2.16-1.576a960.486 960.486 0 0 0 10.226-7.758c8.388-6.43 19.428-14.995 30.408-23.547 10.038-7.82 12.08-9.442 19.97-15.616zM312.38 244.497c-.48.007-.957.04-1.43.097-3.424.42-7.092 2.18-11.067 6.868l-16.496 95.523 49.18-76.508c2.014-7.113-2.495-17.326-9.926-22.504-2.873-2.002-5.883-3.162-8.806-3.422a14.095 14.095 0 0 0-1.453-.054zm74.02 29.52a328.805 328.805 0 0 1-7.677 3.886c-5.127 2.505-10.308 4.887-15.488 7.232l27.76 17.047-4.594-28.166z" />

const icons = {
  twoHandMace,
  twoHandSword,
  twoHandAxe,
  bodyArmour,
  boot,
  glove,
  helmet,
  shield,
  bug,
  oneHandAxe,
  oneHandSword,
  runeDagger,
  dagger,
  claw,
  oneHandMace,
  warstaff,
  staff,
  bow,
  quiver,
  wand,
  scepter,
}

export default icons
