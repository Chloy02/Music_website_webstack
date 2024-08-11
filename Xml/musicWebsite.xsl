<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:ns="http://www.example.com/musicWebsite"
                exclude-result-prefixes="ns">
    <xsl:template match="/">
        <html>
            <head>
                <title>Music Website</title>
                <style>
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    th, td {
                        border: 1px solid black;
                        padding: 8px;
                        text-align: left;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h1>Music Website</h1>
                
                <h2>Artist</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Genre</th>
                        <th>Bio</th>
                    </tr>
                    <tr>
                        <td><xsl:value-of select="/ns:musicWebsite/ns:artist/ns:name"/></td>
                        <td><xsl:value-of select="/ns:musicWebsite/ns:artist/ns:genre"/></td>
                        <td><xsl:value-of select="/ns:musicWebsite/ns:artist/ns:bio"/></td>
                    </tr>
                </table>

                <h2>Albums</h2>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Release Date</th>
                        <th>Tracks</th>
                    </tr>
                    <xsl:for-each select="/ns:musicWebsite/ns:albums/ns:album">
                        <tr>
                            <td><xsl:value-of select="ns:title"/></td>
                            <td><xsl:value-of select="ns:releaseDate"/></td>
                            <td>
                                <xsl:for-each select="ns:tracks/ns:track">
                                    <p><xsl:value-of select="ns:title"/> - <xsl:value-of select="ns:duration"/></p>
                                </xsl:for-each>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>

                <h2>Shows</h2>
                <table>
                    <tr>
                        <th>Location</th>
                        <th>Date</th>
                    </tr>
                    <xsl:for-each select="/ns:musicWebsite/ns:shows/ns:show">
                        <tr>
                            <td><xsl:value-of select="ns:location"/></td>
                            <td><xsl:value-of select="ns:date"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
                
                <h2>Merchandise</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                    <xsl:for-each select="/ns:musicWebsite/ns:merchandise/ns:item">
                        <tr>
                            <td><xsl:value-of select="ns:name"/></td>
                            <td><xsl:value-of select="ns:price"/></td>
                            <td><xsl:value-of select="ns:description"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
