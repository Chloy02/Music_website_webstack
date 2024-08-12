<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:ns="http://www.chloycosta.com/musicWebsite"
                exclude-result-prefixes="ns">
    <xsl:template match="/">
        <html>
            <head>
                <title>Music Website</title>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>
            </head>
            <body class="bg-gray-100 text-gray-900">
                
                <!-- Navbar -->
                <nav class="bg-gray-800 p-4">
                    <div class="container mx-auto">
                        <div class="flex items-center justify-between">
                            <a href="#" class="text-white text-xl font-bold">Music Website</a>
                            <div>
                                <a href="#" class="text-gray-300 hover:text-white px-3">Home</a>
                                <a href="#" class="text-gray-300 hover:text-white px-3">Albums</a>
                                <a href="#" class="text-gray-300 hover:text-white px-3">Shows</a>
                                <a href="#" class="text-gray-300 hover:text-white px-3">Merchandise</a>
                            </div>
                        </div>
                    </div>
                </nav>

                <div class="container mx-auto p-6">
                    <h1 class="text-3xl font-bold mb-6">Music Website</h1>
                    
                    <!-- Artist Section -->
                    <h2 class="text-2xl font-semibold mb-4">Artist</h2>
                    <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden mb-8">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Genre</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white">
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><xsl:value-of select="/ns:musicWebsite/ns:artist/ns:name"/></td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><xsl:value-of select="/ns:musicWebsite/ns:artist/ns:genre"/></td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><xsl:value-of select="/ns:musicWebsite/ns:artist/ns:bio"/></td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- Albums Section -->
                    <h2 class="text-2xl font-semibold mb-4">Albums</h2>
                    <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden mb-8">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Release Date</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tracks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <xsl:for-each select="/ns:musicWebsite/ns:albums/ns:album">
                                <tr class="bg-white">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><xsl:value-of select="ns:title"/></td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><xsl:value-of select="ns:releaseDate"/></td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <xsl:for-each select="ns:tracks/ns:track">
                                            <p><xsl:value-of select="ns:title"/> - <xsl:value-of select="ns:duration"/></p>
                                        </xsl:for-each>
                                    </td>
                                </tr>
                            </xsl:for-each>
                        </tbody>
                    </table>

                    <!-- Shows Section -->
                    <h2 class="text-2xl font-semibold mb-4">Shows</h2>
                    <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden mb-8">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <xsl:for-each select="/ns:musicWebsite/ns:shows/ns:show">
                                <tr class="bg-white">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><xsl:value-of select="ns:location"/></td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><xsl:value-of select="ns:date"/></td>
                                </tr>
                            </xsl:for-each>
                        </tbody>
                    </table>
                    
                    <!-- Merchandise Section -->
                    <h2 class="text-2xl font-semibold mb-4">Merchandise</h2>
                    <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <xsl:for-each select="/ns:musicWebsite/ns:merchandise/ns:item">
                                <tr class="bg-white">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><xsl:value-of select="ns:name"/></td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><xsl:value-of select="ns:price"/></td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><xsl:value-of select="ns:description"/></td>
                                </tr>
                                <xsl:if test="ns:items/ns:item">
                                    <tr class="bg-gray-50">
                                        <td colspan="3" class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <h3 class="font-semibold mb-2">Included Items:</h3>
                                            <ul class="list-disc pl-5">
                                                <xsl:for-each select="ns:items/ns:item">
                                                    <li>
                                                        <strong><xsl:value-of select="ns:name"/></strong> - 
                                                        <xsl:value-of select="ns:price"/> - 
                                                        <xsl:value-of select="ns:description"/>
                                                    </li>
                                                </xsl:for-each>
                                            </ul>
                                        </td>
                                    </tr>
                                </xsl:if>
                            </xsl:for-each>
                        </tbody>
                    </table>
                </div>

            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
