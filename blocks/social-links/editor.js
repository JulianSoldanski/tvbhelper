(function() {
    const { registerBlockType } = wp.blocks;
    const { createElement } = wp.element;

    registerBlockType('tvb-helper/social-links', {
        edit: function() {
            // Erstelle eine realistische Vorschau mit echten Icons
            return createElement('div', {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    border: '2px dashed #be122a',
                    borderRadius: '8px',
                    backgroundColor: '#fafafa'
                }
            }, [
                // Instagram Icon
                createElement('div', {
                    key: 'instagram',
                    style: {
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '44px',
                        height: '44px',
                        backgroundColor: '#fff',
                        border: '2px solid #be122a',
                        borderRadius: '50%',
                        color: '#be122a'
                    }
                }, '📷'),
                
                // Facebook Icon
                createElement('div', {
                    key: 'facebook',
                    style: {
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '44px',
                        height: '44px',
                        backgroundColor: '#fff',
                        border: '2px solid #be122a',
                        borderRadius: '50%',
                        color: '#be122a'
                    }
                }, '📘'),
                
                // Bluesky Icon
                createElement('div', {
                    key: 'bluesky',
                    style: {
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '44px',
                        height: '44px',
                        backgroundColor: '#fff',
                        border: '2px solid #be122a',
                        borderRadius: '50%',
                        color: '#be122a'
                    }
                }, '☁️'),
                
                // Mastodon Icon
                createElement('div', {
                    key: 'mastodon',
                    style: {
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '44px',
                        height: '44px',
                        backgroundColor: '#fff',
                        border: '2px solid #be122a',
                        borderRadius: '50%',
                        color: '#be122a'
                    }
                }, '🐘'),
                
                // Strava Icon
                createElement('div', {
                    key: 'strava',
                    style: {
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '44px',
                        height: '44px',
                        backgroundColor: '#fff',
                        border: '2px solid #be122a',
                        borderRadius: '50%',
                        color: '#be122a'
                    }
                }, '🏃'),
                
                // Info Text
                createElement('div', {
                    key: 'info',
                    style: {
                        marginLeft: '1rem',
                        fontSize: '12px',
                        color: '#666',
                        fontStyle: 'italic'
                    }
                }, '← TVB Social Links')
            ]);
        },
        save: function() {
            return null; // Server-side rendering
        }
    });
})();