        // Language support
        const translations = {
            en: {
                title: "KOKO AJEEB AI",
                darkMode: "Dark Mode",
                controlPanel: "Control Panel",
                promptLabel: "Image Prompt",
                promptPlaceholder: "Describe the image you want to generate...",
                enhanceBtn: "Enhance",
                randomBtn: "Random",
                negativePromptLabel: "Negative Prompt",
                negativePromptPlaceholder: "What you don't want in the image...",
                modelLabel: "AI Model",
                modelDefault: "Default",
                modelDalle: "DALL-E 3",
                modelFlux: "Flux",
                modelMidjourney: "Midjourney",
                modelStable: "Stable Diffusion",
                styleLabel: "Style",
                styleDefault: "Default",
                styleRealistic: "Realistic",
                styleDigital: "Digital Art",
                styleAnime: "Anime Style",
                stylePhoto: "Photography",
                styleWatercolor: "Watercolor",
                styleAirbrush: "Air Brush",
                style3d: "3D Render",
                styleSurreal: "Surrealism",
                styleDisney: "3D Disney Character",
                styleGhibli: "Studio Ghibli",
                styleCaricature: "Caricature 3D",
                styleCartoon: "Cartoon",
                styleGraffiti: "Graffiti Art",
                stylePixel: "Pixel Art",
                styleSteampunk: "Steampunk",
                styleCyberpunk: "Cyberpunk",
                stylePsychedelic: "Psychedelic",
                aspectLabel: "Aspect Ratio",
                aspectSquare: "Square (1:1)",
                aspectStandard: "Standard (4:3)",
                aspectWidescreen: "Widescreen (16:9)",
                aspectPortrait: "Portrait (9:16)",
                aspectClassic: "Classic (3:2)",
                aspectTall: "Tall (2:3)",
                resolutionLabel: "Resolution",
                stepsLabel: "Steps (Quality)",
                nsfwLabel: "NSFW Content",
                ultraDetailLabel: "Ultra Detail",
                highResLabel: "High Resolution",
                advancedSettings: "Advanced Settings",
                colorLabel: "Color Palette",
                colorDefault: "Default",
                colorVibrant: "Vibrant",
                colorPastel: "Pastel",
                colorMono: "Monochrome",
                colorWarm: "Warm Tones",
                colorCool: "Cool Tones",
                colorRGB: "RGB",
                compositionLabel: "Composition",
                compositionDefault: "Default",
                compositionClose: "Close-up",
                compositionWide: "Wide Shot",
                compositionMacro: "Macro",
                compositionAerial: "Aerial",
                compositionLow: "Low View Angle",
                compositionDrone: "Drone Wide Angle",
                generateBtn: "Generate Image",
                historyTitle: "Prompt History",
                clearHistoryBtn: "Clear History",
                galleryPlaceholder: "Your generated images will appear here",
                copyright: "© 2025 KOKO AJEEB AI GENERATOR | Powered by Pollinations API",
                developedBy: "Developed by Koko Ajeeb | Thanks to Github & Cloudflare"
            },
            id: {
                title: "KOKO AJEEB AI",
                darkMode: "Mode Gelap",
                controlPanel: "Panel Kontrol",
                promptLabel: "Prompt Gambar",
                promptPlaceholder: "Deskripsikan gambar yang ingin Anda buat...",
                enhanceBtn: "Tingkatkan",
                randomBtn: "Acak",
                negativePromptLabel: "Prompt Negatif",
                negativePromptPlaceholder: "Apa yang tidak Anda inginkan dalam gambar...",
                modelLabel: "Model AI",
                modelDefault: "Default",
                modelDalle: "DALL-E 3",
                modelFlux: "Flux",
                modelMidjourney: "Midjourney",
                modelStable: "Stable Diffusion",
                styleLabel: "Gaya",
                styleDefault: "Default",
                styleRealistic: "Realistis",
                styleDigital: "Seni Digital",
                styleAnime: "Gaya Anime",
                stylePhoto: "Fotografi",
                styleWatercolor: "Cat Air",
                styleAirbrush: "Air Brush",
                style3d: "Render 3D",
                styleSurreal: "Surealisme",
                styleDisney: "Karakter Disney 3D",
                styleGhibli: "Studio Ghibli",
                styleCaricature: "Karikatur 3D",
                styleCartoon: "Kartun",
                styleGraffiti: "Seni Graffiti",
                stylePixel: "Seni Pixel",
                styleSteampunk: "Steampunk",
                styleCyberpunk: "Cyberpunk",
                stylePsychedelic: "Psikedelik",
                aspectLabel: "Rasio Aspek",
                aspectSquare: "Persegi (1:1)",
                aspectStandard: "Standar (4:3)",
                aspectWidescreen: "Layar Lebar (16:9)",
                aspectPortrait: "Portrait (9:16)",
                aspectClassic: "Klasik (3:2)",
                aspectTall: "Tinggi (2:3)",
                resolutionLabel: "Resolusi",
                stepsLabel: "Langkah (Kualitas)",
                nsfwLabel: "Konten NSFW",
                ultraDetailLabel: "Detail Ultra",
                highResLabel: "Resolusi Tinggi",
                advancedSettings: "Pengaturan Lanjutan",
                colorLabel: "Palet Warna",
                colorDefault: "Default",
                colorVibrant: "Vibrant",
                colorPastel: "Pastel",
                colorMono: "Monokrom",
                colorWarm: "Warna Hangat",
                colorCool: "Warna Dingin",
                colorRGB: "RGB",
                compositionLabel: "Komposisi",
                compositionDefault: "Default",
                compositionClose: "Close-up",
                compositionWide: "Shot Lebar",
                compositionMacro: "Makro",
                compositionAerial: "Udara",
                compositionLow: "Sudut Pandang Rendah",
                compositionDrone: "Sudut Lebar Drone",
                generateBtn: "Buat Gambar",
                historyTitle: "Riwayat Prompt",
                clearHistoryBtn: "Hapus Riwayat",
                galleryPlaceholder: "Gambar yang Anda buat akan muncul di sini",
                copyright: "© 2025 KOKO AJEEB AI GENERATOR | Didukung oleh Pollinations API",
                developedBy: "Dikembangkan oleh Koko Ajeeb | Terima kasih kepada Github & Cloudflare"
            }
        };

        let currentLanguage = 'en';

        // Set language
        function setLanguage(lang) {
            currentLanguage = lang;
            document.querySelectorAll('.lang').forEach(el => {
                const key = el.getAttribute('data-key');
                if (translations[lang] && translations[lang][key]) {
                    el.textContent = translations[lang][key];
                }
            });
            
            document.querySelectorAll('.lang-placeholder').forEach(el => {
                const key = el.getAttribute('data-key');
                if (translations[lang] && translations[lang][key]) {
                    el.setAttribute('placeholder', translations[lang][key]);
                }
            });
            
            // Update active language button
            document.querySelectorAll('.language-btn').forEach(btn => {
                if (btn.getAttribute('data-lang') === lang) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            
            // Save language preference
            localStorage.setItem('kokoAjeebLanguage', lang);
        }

        // Language switcher
        document.querySelectorAll('.language-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                setLanguage(lang);
            });
        });

        // Check for saved language preference
        const savedLanguage = localStorage.getItem('kokoAjeebLanguage');
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;

        function setTheme(isDark) {
            if (isDark) {
                body.setAttribute('data-theme', 'dark');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i> <span class="lang" data-key="darkMode">Dark Mode</span>';
                localStorage.setItem('kokoAjeebTheme', 'dark');
            } else {
                body.setAttribute('data-theme', 'light');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i> <span class="lang" data-key="darkMode">Light Mode</span>';
                localStorage.setItem('kokoAjeebTheme', 'light');
            }
            // Update language text after theme change
            setLanguage(currentLanguage);
        }

        themeToggle.addEventListener('click', () => {
            const isDark = body.getAttribute('data-theme') === 'dark';
            setTheme(!isDark);
        });

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('kokoAjeebTheme');
        if (savedTheme) {
            setTheme(savedTheme === 'dark');
        } else {
            // Default to dark theme
            setTheme(true);
        }

        // Sliders
        const widthSlider = document.getElementById('width');
        const heightSlider = document.getElementById('height');
        const widthValue = document.getElementById('widthValue');
        const heightValue = document.getElementById('heightValue');
        const stepsSlider = document.getElementById('steps');
        const stepsValue = document.getElementById('stepsValue');
        const aspectRatio = document.getElementById('aspectRatio');

        // Update slider values
        widthSlider.addEventListener('input', () => {
            widthValue.textContent = widthSlider.value;
        });

        heightSlider.addEventListener('input', () => {
            heightValue.textContent = heightSlider.value;
        });

        stepsSlider.addEventListener('input', () => {
            stepsValue.textContent = stepsSlider.value;
        });

        // Aspect ratio handling
        aspectRatio.addEventListener('change', () => {
            const ratio = aspectRatio.value;
            let width, height;
            
            switch(ratio) {
                case '1:1':
                    width = height = 1024;
                    break;
                case '4:3':
                    width = 1366;
                    height = 1024;
                    break;
                case '16:9':
                    width = 1920;
                    height = 1080;
                    break;
                case '9:16':
                    width = 1080;
                    height = 1920;
                    break;
                case '3:2':
                    width = 1536;
                    height = 1024;
                    break;
                case '2:3':
                    width = 1024;
                    height = 1536;
                    break;
                default:
                    width = height = 1024;
            }
            
            widthSlider.value = width;
            heightSlider.value = height;
            widthValue.textContent = width;
            heightValue.textContent = height;
        });

        // Accordion functionality
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const accordion = header.parentElement;
                accordion.classList.toggle('active');
                
                const icon = header.querySelector('i');
                if (accordion.classList.contains('active')) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                } else {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            });
        });

        // Random prompt examples
        const randomPrompts = [
            "A steampunk city with flying airships and brass towers, neon lights glowing in the fog, intricate mechanical details, cyberpunk atmosphere, 4k ultra detailed",
            "A majestic dragon made of gears and clockwork, breathing steam instead of fire, standing on a mountain of discarded machinery, highly detailed",
            "A futuristic cybernetic samurai with glowing neon circuits on his armor, standing in a rainy Tokyo street at night, ultra realistic",
            "An enchanted forest with bioluminescent plants and floating islands, fairies made of light, magical atmosphere, digital art style",
            "A portrait of a beautiful elven queen with intricate silver jewelry and glowing eyes, fantasy art, highly detailed face, soft lighting",
            "A dystopian megacity at night with towering skyscrapers and flying cars, neon advertisements everywhere, cyberpunk style, ultra detailed",
            "A pirate ship sailing through the clouds with hot air balloons as sails, crew of anthropomorphic animals, children's book illustration style",
            "A warrior made entirely of water fighting a knight made of lava in an epic battle, fantasy art, dramatic lighting, highly detailed",
            "An ancient library with floating books and magical artifacts, glowing runes on the walls, cozy atmosphere, digital painting",
            "A cute robot cat with glowing eyes and mechanical parts, sitting on a windowsill overlooking a futuristic city, anime style"
        ];

        // Enhance prompt function
        document.getElementById('enhancePrompt').addEventListener('click', () => {
            const promptTextarea = document.getElementById('prompt');
            let prompt = promptTextarea.value.trim();
            
            if (!prompt) {
                alert(currentLanguage === 'en' ? 'Please enter a prompt first' : 'Silakan masukkan prompt terlebih dahulu');
                return;
            }
            
            // Basic enhancement - you could make this more sophisticated
            prompt += ", ultra detailed, 4k, intricate, highly detailed, professional lighting, cinematic composition";
            promptTextarea.value = prompt;
        });

        // Random prompt function
        document.getElementById('randomPrompt').addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * randomPrompts.length);
            document.getElementById('prompt').value = randomPrompts[randomIndex];
        });

        // Prompt history
        let promptHistory = JSON.parse(localStorage.getItem('kokoAjeebPromptHistory')) || [];

        function saveToHistory(prompt, settings) {
            // Check if this prompt already exists in history
            const exists = promptHistory.some(item => item.prompt === prompt);
            
            if (!exists) {
                promptHistory.unshift({
                    prompt,
                    settings,
                    timestamp: new Date().toISOString()
                });
                
                // Keep only the last 20 items
                if (promptHistory.length > 20) {
                    promptHistory = promptHistory.slice(0, 20);
                }
                
                localStorage.setItem('kokoAjeebPromptHistory', JSON.stringify(promptHistory));
                renderHistory();
            }
        }

        function renderHistory() {
            const historyList = document.getElementById('historyList');
            historyList.innerHTML = '';
            
            promptHistory.forEach((item, index) => {
                const historyItem = document.createElement('div');
                historyItem.className = 'history-item';
                historyItem.textContent = item.prompt;
                historyItem.title = item.prompt;
                
                historyItem.addEventListener('click', () => {
                    document.getElementById('prompt').value = item.prompt;
                    // You could also load the settings if you want
                });
                
                historyList.appendChild(historyItem);
            });
        }

        // Clear history
        document.getElementById('clearHistory').addEventListener('click', () => {
            if (confirm(currentLanguage === 'en' ? 'Clear all prompt history?' : 'Hapus semua riwayat prompt?')) {
                promptHistory = [];
                localStorage.removeItem('kokoAjeebPromptHistory');
                renderHistory();
            }
        });

        // Initial history render
        renderHistory();

        // Generate image function
        document.getElementById('generateBtn').addEventListener('click', async () => {
            const prompt = document.getElementById('prompt').value.trim();
            const negativePrompt = document.getElementById('negativePrompt').value.trim();
            const model = document.getElementById('aiModel').value;
            const style = document.getElementById('style').value;
            const width = widthSlider.value;
            const height = heightSlider.value;
            const steps = stepsSlider.value;
            const nsfw = document.getElementById('nsfwToggle').checked;
            const ultraDetail = document.getElementById('ultraDetailToggle').checked;
            const highRes = document.getElementById('highResToggle').checked;
            const colorPalette = document.getElementById('colorPalette').value;
            const composition = document.getElementById('composition').value;
            
            if (!prompt) {
                alert(currentLanguage === 'en' ? 'Please enter a prompt' : 'Silakan masukkan prompt');
                return;
            }
            
            // Show loading overlay
            const loadingOverlay = document.getElementById('loadingOverlay');
            loadingOverlay.style.display = 'flex';
            
            try {
                // Build the full prompt with all settings
                let fullPrompt = prompt;
                
                // Add style if not default
                if (style !== 'default') {
                    fullPrompt += `, ${style} style`;
                }
                
                // Add color palette if not default
                if (colorPalette !== 'default') {
                    fullPrompt += `, ${colorPalette} color palette`;
                }
                
                // Add composition if not default
                if (composition !== 'default') {
                    fullPrompt += `, ${composition}`;
                }
                
                // Add ultra detail if enabled
                if (ultraDetail) {
                    fullPrompt += ', ultra detailed, intricate details, professional lighting';
                }
                
                // Add high resolution if enabled
                if (highRes) {
                    fullPrompt += ', 8k, ultra high resolution';
                }
                
                // Add negative prompt if exists
                if (negativePrompt) {
                    fullPrompt += ` | negative: ${negativePrompt}`;
                }
                
                // Save to history
                const settings = {
                    model,
                    style,
                    width,
                    height,
                    steps,
                    nsfw,
                    ultraDetail,
                    highRes,
                    colorPalette,
                    composition
                };
                
                saveToHistory(prompt, settings);
                
                // Build API URL
                let apiUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(fullPrompt)}`;
                
                // Add parameters
                apiUrl += `?width=${width}&height=${height}&steps=${steps}`;
                
                // Add model if not default
                if (model !== 'default') {
                    apiUrl += `&model=${model}`;
                }
                
                // Add NSFW if enabled
                if (nsfw) {
                    apiUrl += '&nsfw=true';
                }
                
                // Add no logo
                apiUrl += '&nologo=true';
                
                // Generate image
                const response = await fetch(apiUrl);
                
                if (!response.ok) {
                    throw new Error(currentLanguage === 'en' ? 'Failed to generate image' : 'Gagal membuat gambar');
                }
                
                // Get image as blob
                const blob = await response.blob();
                const imageUrl = URL.createObjectURL(blob);
                
                // Create image card
                const gallery = document.getElementById('gallery');
                
                // Remove placeholder if it exists
                const placeholder = gallery.querySelector('.placeholder');
                if (placeholder) {
                    gallery.removeChild(placeholder);
                }
                
                const imageCard = document.createElement('div');
                imageCard.className = 'image-card';
                
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = prompt;
                
                const imageInfo = document.createElement('div');
                imageInfo.className = 'image-info';
                
                const promptText = document.createElement('p');
                promptText.textContent = prompt;
                promptText.title = prompt;
                
                const settingsText = document.createElement('p');
                settingsText.textContent = `${width}x${height} | ${steps} steps | ${style}`;
                
                const imageActions = document.createElement('div');
                imageActions.className = 'image-actions';
                
                const downloadBtn = document.createElement('button');
                downloadBtn.className = 'btn btn-outline btn-sm';
                downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download';
                downloadBtn.addEventListener('click', () => {
                    const a = document.createElement('a');
                    a.href = imageUrl;
                    a.download = `koko-ajeeb-ai-${Date.now()}.png`;
                    a.click();
                });
                
                const shareBtn = document.createElement('button');
                shareBtn.className = 'btn btn-outline btn-sm';
                shareBtn.innerHTML = '<i class="fas fa-share-alt"></i> Share';
                shareBtn.addEventListener('click', () => {
                    showShareOptions(imageUrl, prompt);
                });
                
                imageActions.appendChild(downloadBtn);
                imageActions.appendChild(shareBtn);
                
                imageInfo.appendChild(promptText);
                imageInfo.appendChild(settingsText);
                imageInfo.appendChild(imageActions);
                
                imageCard.appendChild(img);
                imageCard.appendChild(imageInfo);
                
                // Add to the top of the gallery
                gallery.insertBefore(imageCard, gallery.firstChild);
                
            } catch (error) {
                console.error('Error generating image:', error);
                alert(error.message);
            } finally {
                loadingOverlay.style.display = 'none';
            }
        });

        // Share options
        function showShareOptions(imageUrl, prompt) {
            const shareText = currentLanguage === 'en' 
                ? `Check out this AI-generated image: "${prompt}" created with KOKO AJEEB AI!` 
                : `Lihat gambar AI ini: "${prompt}" dibuat dengan KOKO AJEEB AI!`;
            
            const shareUrl = encodeURIComponent(window.location.href);
            const encodedImageUrl = encodeURIComponent(imageUrl);
            const encodedText = encodeURIComponent(shareText);
            
            const shareOptions = document.createElement('div');
            shareOptions.className = 'share-buttons';
            shareOptions.innerHTML = `
                <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${encodedText}" target="_blank" class="share-btn facebook">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/intent/tweet?text=${encodedText}&url=${shareUrl}" target="_blank" class="share-btn twitter">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://wa.me/?text=${encodedText} ${shareUrl}" target="_blank" class="share-btn whatsapp">
                    <i class="fab fa-whatsapp"></i>
                </a>
                <a href="https://www.tiktok.com/share?text=${encodedText}" target="_blank" class="share-btn tiktok">
                    <i class="fab fa-tiktok"></i>
                </a>
                <a href="https://t.me/share/url?url=${shareUrl}&text=${encodedText}" target="_blank" class="share-btn telegram">
                    <i class="fab fa-telegram-plane"></i>
                </a>
            `;
            
            // Create a modal or show in a popup
            alert(currentLanguage === 'en' 
                ? 'Choose a platform to share to' 
                : 'Pilih platform untuk berbagi');
            // In a real app, you'd want to implement a proper modal
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            // Set initial slider values
            widthValue.textContent = widthSlider.value;
            heightValue.textContent = heightSlider.value;
            stepsValue.textContent = stepsSlider.value;
            
            // Set language
            setLanguage(currentLanguage);
        });